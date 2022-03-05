/**
 * @file Declares API for location related data access object methods
 */
import {Location} from "../../models/Location";

export interface LocationDaoI {
    /**
     * Adds a sublocation to the {@link Location} with the given data
     * @param lid {string} - the parent of the location
     * @param location {Location} - the location to be added within the location
     * @return {Promise<object>} - promise containing the status of the Update operation
     */
    createSubLocation(lid: string, location: Location): Promise<object>;

    /**
     * Retrieves the {@link Location} with the given ID
     * @param lid {string} - the ID of the location to be retrieved
     * @return {Promise<Location | null>} - promise containing the requested location
     */
    getLocationById(lid: string): Promise<Location | null>;

    /**
     * Updates the {@link Location} with the given data
     * @param lid {string} - the ID of the location to be updated
     * @param location {Location} - the Updated location
     * @return {Promise<object>} - promise containing the status of the Update operation
     */
    updateLocationById(lid: string, location: Location): Promise<object>;

    /**
     * Deletes the {@link Location} with the given ID
     * @param lid {string} - the ID of the location to be updated
     * @return {Promise<object>} - promise containing the status of the Update operation
     */
    deleteLocationById(lid: string): Promise<object>;
}
