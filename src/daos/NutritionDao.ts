/**
 * @file Implements APIs for Nutrition related data access object methods
 */
import {Nutrition} from "../models/Nutrition";
import {NutritionModel} from "../mongoose/nutrition/NutritionModel";
import {NutritionDaoI} from "./interfaces/NutritionDaoI";
import {ObjectId} from 'bson';

/**
 * @class UserDao UserDao Implements the NutritionDaoI, with all the CRUD
 * functionalities for the Nutrition resource
 * @property {NutritionDao} nutritionDao - Singleton DAO implementing Nutrition
 * CRUD operations
 */
export class NutritionDao implements NutritionDaoI {
    private static nutritionDao: NutritionDao = new NutritionDao();

    // Prevent Initiation of Object
    private constructor() { // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * Returns the Singleton Instance of the NutritionDao
     * @function
     * @return {NutritionDao} the Singleton Instance of the NutritionDao
     */
    public static getInstance(): NutritionDao {
        return this.nutritionDao;
    }

    public async addNutritionData(nutrition: Nutrition): Promise<Nutrition> {
        return NutritionModel
            .create(nutrition);
    }

    public async getAllNutritionData(): Promise<Nutrition[]> {
        return NutritionModel
            .find();
    }

    public async getNutritionDataById(id: ObjectId): Promise<Nutrition | null> {
        return NutritionModel
            .findById(id);
    }

    public async getNutritionDataByUpc(upc: string): Promise<Nutrition[]> {
        return NutritionModel
            .find({upc: upc});
    }

    public async updateNutritionDataById(id: ObjectId, nutrition: Nutrition): Promise<object> {
        return NutritionModel
            .updateOne({_id: id}, {$set: nutrition});
    }

    public async deleteAllNutritionData(): Promise<object> {
        return NutritionModel
            .deleteMany();
    }

    public async deleteNutritionDataById(id: ObjectId): Promise<object> {
        return NutritionModel
            .deleteOne({_id: id})
    }
}