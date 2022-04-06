/**
 * @file Declares API for membership related data access object methods
 */
import {Nutrition} from "../../models/Nutrition";
import {ObjectId} from 'bson';

export interface NutritionDaoI {
    /**
     * Creates {@link Nutrition} data with the given data
     * @param nutrition {Nutrition} - the data to be used to create the Nutrition
     * record
     * @return {Promise<Food>} - promise containing the Nutrition record created
     * with the given data
     */
    addNutritionData(nutrition: Nutrition): Promise<Nutrition>;

    getAllNutritionData(): Promise<Nutrition[]>;

    getNutritionDataById(id: ObjectId): Promise<Nutrition | null>;

    getNutritionDataByUpc(upc: string): Promise<Nutrition[]>;

    updateNutritionDataById(id: ObjectId, nutrition: Nutrition): Promise<object>;

    deleteNutritionDataById(id: ObjectId): Promise<object>;

    /**
     * Deletes all the Nutrition Data in the DB
     * @return {Promise<object>} - promise containing status of the delete operation.
     */
    deleteAllNutritionData(): Promise<object>;
}