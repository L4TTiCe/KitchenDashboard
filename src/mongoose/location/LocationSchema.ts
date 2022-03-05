/**
 * @file Implements mongoose schema for Locations
 */
import mongoose from "mongoose";

/**
 * The LocationSchema represents how a {@link Location} is represented in the database.
 * @typedef {LocationSchema} LocationSchema
 */
export const LocationSchema = new mongoose.Schema({
    name: {type: String, trim: true},
}, {collection: "locations"});

LocationSchema.add({
    subLocations: [LocationSchema],
})
