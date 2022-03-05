/**
 * @file Implements mongoose model to CRUD
 * documents in the food collection
 */
import mongoose from "mongoose"
import {FoodSchema} from "./FoodSchema"

/**
 * The FoodSchema is used for creating and reading documents of the {@link Food} type defined by the
 * {@link FoodSchema} from the underlying MongoDB database.
 * @typedef {FoodModel} FoodModel
 */
export const FoodModel = mongoose.model("FoodModel", FoodSchema)
