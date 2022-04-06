/**
 * @file Implements mongoose schema for Ownership
 */
import mongoose from "mongoose";
import {Location} from "../../models/Location";
import {LocationModel} from "../location/LocationModel";
import {Ownership} from "../../models/Ownership";
import {OwnershipModel} from "./OwnershipModel";
import {LocationDao} from "../../daos/LocationDao";
import {ObjectId} from "bson";

/**
 * The OwnershipSchema represents how a {@link Ownership} is represented in the database.
 * @typedef {OwnershipSchema} OwnershipSchema
 */
export const OwnershipSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    food: {type: mongoose.Schema.Types.ObjectId, ref: "FoodModel"},
    quantity: {type: Number, min: 0, max: 100000},
    quantity_unit: {type: String, lowercase: true, trim: true},
    price: {type: Number, min: 0, max: 100000},
    date_procured: {type: Date, default: Date.now},
    date_expiry: {type: Date, default: getDefaultExpiry},
    located_at: {type: mongoose.Schema.Types.ObjectId, ref: "LocationModel"},
}, {collection: "ownership"});

function addDays(date: number | Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function getDefaultExpiry(): Date {
    return addDays(Date.now(), 14);
}

async function autoAddFoodToLocation(this: any, next: (p: any) => void) { // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log("post-hook running for OwnershipSchema - autoAddFoodToLocation");
    const foodToBeAdded: Ownership | null = await OwnershipModel.findById(this._id);
    if (foodToBeAdded != null) {
        const parentLocation = foodToBeAdded.located_at
        // console.log("parentLocation: ", parentLocation)
        if (parentLocation) {
            const location: Location | null = await LocationModel.findById(parentLocation);
            // console.log("Location :", location)
            if (location) {
                if (!location.contents.includes(foodToBeAdded)) {
                    // console.log("PUSHING")
                    location.contents.push(foodToBeAdded)
                    // console.log(location)
                    await LocationDao.getInstance().updateLocationById(location._id, location)
                }
            }
        }
    }
    next(this);
}

async function autoUpdateFoodToLocation(this: any, next: () => void) { // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log("post-hook running for OwnershipSchema - autoUpdateFoodToLocation");
    // console.log(this)
    const foodToBeAdded: Ownership | null = await OwnershipModel.findById(new ObjectId(this._conditions._id.id.toString('hex')));
    // console.log("Food: ",foodToBeAdded)
    if (foodToBeAdded != null) {
        const parentLocation = foodToBeAdded.located_at
        // console.log("TEST: ", parentLocation)
        if (parentLocation) {
            const old_location: Location | null = await LocationModel.findById(parentLocation);
            // console.log("Old Location :", old_location)
            if (old_location) {
                if (!old_location.contents.includes(foodToBeAdded)) {
                    console.log("REMOVING")
                    // location.contents = location.contents.filter(obj => {
                    //     return obj != foodToBeAdded
                    // })
                    old_location.contents.forEach( (item, index) => {
                        if(item._id.toString() === foodToBeAdded._id.toString()) old_location.contents.splice(index);
                    });
                    // location.contents = []
                    // console.log(old_location.contents)
                    await LocationDao.getInstance().updateLocationById(old_location._id, old_location)
                }
            }
            const new_location: Location | null = await LocationModel.findById(this._update.$set.located_at);
            console.log("New Location :", new_location)
            if (new_location) {
                // Check if already exists
                let already_exists = false;
                new_location.contents.forEach( (item, index) => {
                    if(item._id.toString() === foodToBeAdded._id.toString()) {
                        already_exists = true
                    }
                });

                if (!already_exists) {
                    console.log("PUSHING")
                    new_location.contents.push(foodToBeAdded)
                    console.log(new_location)
                    await LocationDao.getInstance().updateLocationById(new_location._id, new_location)
                }
            }
        }
    }
    next();
}

OwnershipSchema
    .post('save', autoAddFoodToLocation)
    .pre('updateOne', autoUpdateFoodToLocation)
