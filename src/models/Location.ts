import {ObjectId} from 'bson';

/**
 * Represents a location within a shared kitchen
 * @typedef {Location} Location
 */
export interface Location {
    _id: ObjectId;
    name: string;
    subLocations: Location[];
}
