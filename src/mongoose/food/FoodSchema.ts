/**
 * @file Implements mongoose schema for Food
 */
import mongoose from "mongoose";

/**
 * The FoodSchema represents how a {@link Food} is represented in the database.
 * @typedef {FoodSchema} FoodSchema
 */
export const FoodSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true, unique: true},
    upc: {type: String, trim: true},
    createdOn: {type: Date, default: Date.now},
    nutrition: {type: mongoose.Schema.Types.ObjectId, ref: "NutritionModel"},
}, {collection: "food"})
