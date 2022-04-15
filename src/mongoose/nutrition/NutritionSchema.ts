/**
 * @file Implements mongoose schema for Nutrition
 */
import mongoose from "mongoose";

/**
 * The NutritionSchema represents how a {@link Nutrition} is represented in the database.
 * @typedef {NutritionSchema} NutritionSchema
 */
export const NutritionSchema = new mongoose.Schema({
    upc: {type: String, lowercase: true, trim: true},
    serving_size: {type: Number, min: 0, max: 100000},
    serving_unit: {type: String, lowercase: true, trim: true},
    calories: {type: Number, min: 0, max: 100000},
    total_fat: {type: Number, min: 0, max: 100000},
    saturated_fat: {type: Number, min: 0, max: 100000},
    trans_fat: {type: Number, min: 0, max: 100000},
    cholesterol: {type: Number, min: 0, max: 100000},
    sodium: {type: Number, min: 0, max: 100000},
    total_carbohydrates: {type: Number, min: 0, max: 100000},
    dietary_fiber: {type: Number, min: 0, max: 100000},
    total_sugar: {type: Number, min: 0, max: 100000},
    added_sugar: {type: Number, min: 0, max: 100000},
    protein: {type: Number, min: 0, max: 100000},
    description: {type: String, lowercase: true, trim: true},
}, {collection: "nutrition"});
