/**
 * @file Implements mongoose model to CRUD
 * documents in the groups collection
 */
import mongoose from "mongoose"
import {GroupSchema} from "./GroupSchema"

/**
 * The GroupSchema is used for creating and reading documents of the {@link Group} type defined by the
 * {@link GroupSchema} from the underlying MongoDB database.
 * @typedef {GroupModel} GroupModel
 */
export const GroupModel = mongoose.model("GroupModel", GroupSchema)
