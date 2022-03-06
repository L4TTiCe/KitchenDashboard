/**
 * @file Implements mongoose schema for Users
 */
import mongoose from "mongoose";

/**
 * The UserSchema represents how a {@link User} is represented in the database.
 * @typedef {UserSchema} UserSchema
 */
export const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: {type: String},
    // group: {type: mongoose.Schema.Types.ObjectId, ref: "GroupModel"},
    joinedOn: {type: Date, default: Date.now},
}, {collection: "users"})
