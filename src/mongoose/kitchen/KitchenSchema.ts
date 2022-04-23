/**
 * @file Implements mongoose schema for Kitchens
 */
import mongoose from "mongoose";

/**
 * The UserSchema represents how a {@link Kitchen} is represented in the database.
 * @typedef {KitchenSchema} KitchenSchema
 */
export const KitchenSchema = new mongoose.Schema({
    name: {type: String, trim: true},
    using_since: {type: Date, default: Date.now},
    locations: [{type: mongoose.Schema.Types.ObjectId, ref: "LocationModel"}],
}, {collection: "kitchens"})
