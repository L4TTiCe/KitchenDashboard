/**
 * @file Implements mongoose schema for Locations
 */
import mongoose from "mongoose";
import {LocationModel} from "./LocationModel";
import {Location} from "../../models/Location";

/**
 * The LocationSchema represents how a {@link Location} is represented in the database.
 * @typedef {LocationSchema} LocationSchema
 */
export const LocationSchema = new mongoose.Schema({
    name: {type: String, trim: true},
}, {collection: "locations"});

LocationSchema.add({
    subLocations: [{type: mongoose.Schema.Types.ObjectId, ref: "LocationModel"}],
})

// Reference:
// https://stackoverflow.com/questions/44968248/how-to-populate-documents-with-unlimited-nested-levels-using-mongoose
function autoPopulateSubLocations(this: any, next: () => void) {  // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log("pre-hook running for LocationSchema - autoPopulateSubLocations");
    this.populate('subLocations');
    next();
}

/**
 * Deletes all child locations within a location, when deleted.
 */
async function autoDeleteSubLocations(this: any, next: () => void) {  // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log("pre-hook running for LocationSchema - autoDeleteSubLocations");
    const locationToBeDeleted: Location | null = await LocationModel.findById(this._conditions._id);
    if (locationToBeDeleted != null) {
        for (let i = 0; i < locationToBeDeleted.subLocations.length; i++) {
            const subLocation = locationToBeDeleted.subLocations[i];
            await LocationModel
                .deleteOne({_id: subLocation._id});
        }
    }
    next();
}


// Recursively populate subLocations using the pre hook.
// https://www.mongodb.com/blog/post/introducing-version-40-mongoose-nodejs-odm
LocationSchema
    .pre('findOne', autoPopulateSubLocations)
    .pre('find', autoPopulateSubLocations)
    .pre('deleteOne', autoDeleteSubLocations);
