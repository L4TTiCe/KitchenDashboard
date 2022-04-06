/**
 * @file Implements mongoose model to CRUD
 * documents in the nutrition collection
 */
import mongoose from "mongoose"
import {NutritionSchema} from "./NutritionSchema";

/**
 * The NutritionModel is used for creating and reading documents of the
 * {@link Nutrition} type defined by the {@link NutritionSchema} from the
 * underlying MongoDB database.
 * @typedef {NutritionModel} NutritionModel
 */
export const NutritionModel = mongoose.model("NutritionModel", NutritionSchema)
