import {ObjectId} from 'bson';
import {Ownership} from "./Ownership";

/**
 * Represents a location within a shared kitchen
 * @typedef {Location} Location
 */
export interface Location {
    _id: ObjectId;
    name: string;
    subLocations: Location[];
    contents: Ownership[];
}
