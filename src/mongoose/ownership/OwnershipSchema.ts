/**
 * @file Implements mongoose schema for Ownership
 */
import mongoose from "mongoose";

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
