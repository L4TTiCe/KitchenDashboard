/**
 * @file Implements mongoose schema for Locations
 */
import mongoose from "mongoose";

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

// Recursively populate subLocations using the pre hook.
// https://www.mongodb.com/blog/post/introducing-version-40-mongoose-nodejs-odm
LocationSchema
    .pre('findOne', autoPopulateSubLocations)
    .pre('find', autoPopulateSubLocations);
