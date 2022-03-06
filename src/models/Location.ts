/**
 * Represents a location within a shared kitchen
 * @typedef {Location} Location
 */
export interface Location {
    _id: string
    name: string;
    subLocations: Location[];
}
