/**
 * @file Declares API for kitchen related data access object methods
 */
import {Kitchen} from "../../models/Kitchen";
import {Location} from "../../models/Location";

export interface KitchenDaoI {
    /**
     * Creates a {@link Kitchen} with the given data
     * @param kitchen {Kitchen} - the data to be used to create the kitchen
     * @return {Promise<Kitchen>} - promise containing the kitchen created with the given data
     */
    createKitchen(kitchen: Kitchen): Promise<Kitchen>;

    /**
     * Returns all the {@link Kitchen}s
     * @return {Promise<Kitchen[]>} - Promise containing all the kitchen
     */
    findAllKitchens(): Promise<Kitchen[]>;

    /**
     * Returns the {@link Kitchen} with the given KID
     * @param kid {string} - the KID of the kitchen to be returned
     * @return {Promise<Kitchen>} - promise containing the kitchen with the given KID
     */
    findKitchenById(kid: string): Promise<Kitchen | null>;

    /**
     * Adds a location to the {@link Kitchen} with the given data
     * @param kid {string} - the parent of the location
     * @param location {Location} - the location to be added within the Kitchen
     * @return {Promise<Kitchen>} - promise containing the kitchen created with the given data
     */
    createLocation(kid: string, location: Location): Promise<object>;

    /**
     * Updates the {@link Kitchen} with their KID and returns the updated kitchen
     * @param kid {string} - the KID of the kitchen to be updated
     * @param kitchen {Kitchen} - the data to be used to update the kitchen
     * @return {Promise<Kitchen>} - promise containing the kitchen updated with the given data
     */
    updateKitchenById(kid: string, kitchen: Kitchen): Promise<object>;

    /**
     * Deletes all Kitchens in the DB
     * @return {Promise<object>} the status of the delete operation
     */
    deleteAllKitchens(): Promise<object>;

    /**
     * Deleted the {@link Kitchen} by KID
     * @param kid {string} - the KID of the kitchen to be deleted
     * @return {Promise<object>} the status of the delete operation
     */
    deleteKitchenById(kid: string): Promise<object>;
}
