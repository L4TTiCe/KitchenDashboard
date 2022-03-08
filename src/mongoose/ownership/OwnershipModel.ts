/**
 * @file Implements mongoose model to CRUD
 * documents in the ownership collection
 */
import mongoose from "mongoose"
import {OwnershipSchema} from "./OwnershipSchema";

/**
 * The OwnershipSchema is used for creating and reading documents of the {@link Ownership} type defined by the
 * {@link OwnershipSchema} from the underlying MongoDB database.
 * @typedef {OwnershipModel} OwnershipModel
 */
export const OwnershipModel = mongoose.model("OwnershipModel", OwnershipSchema)
