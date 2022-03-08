/**
 * @file Declares API for location related data access object methods
 */
import {Location} from "../../models/Location";
import {ObjectId} from 'bson';

export interface LocationDaoI {
    /**
     * Adds a sublocation to the {@link Location} with the given data
     * @param lid {ObjectId} - the parent of the location
     * @param location {Location} - the location to be added within the location
     * @return {Promise<object>} - promise containing the status of the Update operation
     */
    createSubLocation(lid: ObjectId, location: Location): Promise<object>;

    /**
     * Returns all the {@link Location}s within the DB
     * @return {Promise<Location[]>} - promise containing all Locations
     */
    getAllLocations(): Promise<Location[]>;

    /**
     * Retrieves the {@link Location} with the given ID
     * @param lid {ObjectId} - the ID of the location to be retrieved
     * @return {Promise<Location | null>} - promise containing the requested location
     */
    getLocationById(lid: ObjectId): Promise<Location | null>;

    /**
     * Updates the {@link Location} with the given data
     * @param lid {ObjectId} - the ID of the location to be updated
     * @param location {Location} - the Updated location
     * @return {Promise<object>} - promise containing the status of the Update operation
     */
    updateLocationById(lid: ObjectId, location: Location): Promise<object>;

    /**
     * Deletes the {@link Location} with the given ID
     * @param lid {ObjectId} - the ID of the location to be updated
     * @return {Promise<object>} - promise containing the status of the Delete operation
     */
    deleteLocationById(lid: ObjectId): Promise<object>;

    /**
     * Deletes all the {@link Location}s
     * @return {Promise<object>} - promise containing the status of the Delete operation
     */
    deleteAllLocations(): Promise<object>;
}
