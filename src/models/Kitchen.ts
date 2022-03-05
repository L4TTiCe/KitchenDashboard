import {Location} from "./Location";

/**
 * Represents a Shared kitchen
 * @typedef {Kitchen} Kitchen
 */
export interface Kitchen {
    name: string;
    locations: Location[];
}
