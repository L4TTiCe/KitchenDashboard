/**
 * Represents a location within a shared kitchen
 * @typedef {Location} Location
 */
export interface Location {
    name: string;
    subLocations: Location[];
}
