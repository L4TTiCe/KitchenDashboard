/**
 * @file Implements mongoose schema for Groups
 */
import mongoose from "mongoose";

/**
 * The GroupSchema represents how a {@link Group} is represented in the database.
 * @typedef {GroupSchema} GroupSchema
 */
export const GroupSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true, unique: true},
    createdOn: {type: Date, default: Date.now},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
}, {collection: "groups"})
