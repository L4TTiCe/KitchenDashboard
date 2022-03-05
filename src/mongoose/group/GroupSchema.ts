/**
 * @file Implements mongoose schema for Groups
 */
import mongoose from "mongoose";

/**
 * The UserSchema represents how a {@link Group} is represented in the database.
 * @typedef {GroupSchema} GroupSchema
 */
export const GroupSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true, unique: true},
    createdOn: {type: Date, default: Date.now},
}, {collection: "groups"})
