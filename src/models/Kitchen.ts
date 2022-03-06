import {Location} from "./Location";

/**
 * Represents a Shared kitchen
 * @typedef {Kitchen} Kitchen
 */
export interface Kitchen {
    _id: string
    name: string;
    locations: Location[];
}
