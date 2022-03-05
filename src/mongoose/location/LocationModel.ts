/**
 * @file Implements mongoose model to CRUD
 * documents in the locations collection
 */
import mongoose from "mongoose"
import {LocationSchema} from "./LocationSchema"

/**
 * The KitchenSchema is used for creating and reading documents of the {@link Location} type defined by the
 * {@link LocationSchema} from the underlying MongoDB database.
 * @typedef {LocationModel} LocationModel
 */
export const LocationModel = mongoose.model("LocationModel", LocationSchema)
