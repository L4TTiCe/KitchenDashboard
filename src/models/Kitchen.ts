import {Location} from "./Location";
import {ObjectId} from 'bson';

/**
 * Represents a Shared kitchen
 * @typedef {Kitchen} Kitchen
 */
export interface Kitchen {
    _id: ObjectId;
    name: string;
    locations: Location[];
}
