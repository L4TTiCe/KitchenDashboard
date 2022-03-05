/**
 * @file Implements mongoose schema for Kitchens
 */
import mongoose from "mongoose";
import {LocationSchema} from "../location/LocationSchema";

/**
 * The UserSchema represents how a {@link Kitchen} is represented in the database.
 * @typedef {KitchenSchema} KitchenSchema
 */
export const KitchenSchema = new mongoose.Schema({
    name: {type: String, trim: true},
    usingSince: {type: Date, default: Date.now},
    locations: [LocationSchema],
}, {collection: "kitchens"})
