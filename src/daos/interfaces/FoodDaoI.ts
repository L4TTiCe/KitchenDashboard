/**
 * @file Declares API for Food related data access object methods
 */
import {Food} from "../../models/Food";

export interface FoodDaoI {
    /**
     * Creates {@link Food} with the given data
     * @param food {Food} - the data to be used to create the Food
     * @return {Promise<Food>} - promise containing the Food created with the given data
     */
    createFood(food: Food): Promise<Food>;

    /**
     * Returns all the {@link Food}
     * @return {Promise<Food[]>} - Promise containing all the Food
     */
    findAllFood(): Promise<Food[]>;

    /**
     * Returns the {@link Food} with the given FID
     * @param fid {string} - the FID of the Food to be returned
     * @return {Promise<Food>} - promise containing the Food with the given FID
     */
    findFoodById(fid: string): Promise<Food | null>;

    /**
     * Updates the {@link Food} with their FID and returns the updated Food
     * @param fid {string} - the FID of the Food to be updated
     * @param food {Food} - the data to be used to update the Food
     * @return {Promise<Food>} - promise containing the Food updated with the given data
     */
    updateFoodById(fid: string, food: Food): Promise<object>;

    /**
     * Deletes all Food in the DB
     * @return {Promise<object>} the status of the delete operation
     */
    deleteAllFood(): Promise<object>;

    /**
     * Deleted the {@link Food} by FID
     * @param fid {string} - the FID of the Food to be deleted
     * @return {Promise<object>} the status of the delete operation
     */
    deleteFoodById(fid: string): Promise<object>;
}
