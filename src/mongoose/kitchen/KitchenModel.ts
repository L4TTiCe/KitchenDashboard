/**
 * @file Implements mongoose model to CRUD
 * documents in the kitchens collection
 */
import mongoose from "mongoose"
import {KitchenSchema} from "./KitchenSchema"

/**
 * The KitchenSchema is used for creating and reading documents of the {@link Kitchen} type defined by the
 * {@link KitchenSchema} from the underlying MongoDB database.
 * @typedef {KitchenModel} KitchenModel
 */
export const KitchenModel = mongoose.model("KitchenModel", KitchenSchema)
