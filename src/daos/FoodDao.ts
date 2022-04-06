/**
 * @file Implements APIs for Food related data access object methods
 */
import {Food} from "../models/Food";
import {FoodModel} from "../mongoose/food/FoodModel";
import {FoodDaoI} from "./interfaces/FoodDaoI";
import {ObjectId} from 'bson';

/**
 * @class FoodDao FoodDao Implements the FoodDaoI, with all the CRUD functionalities for the Food resource
 * @property {FoodDao} foodDao - Singleton DAO implementing Food CRUD operations
 */
export class FoodDao implements FoodDaoI {
    private static foodDao: FoodDao = new FoodDao();

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * Returns the Singleton Instance of the GroupDao
     * @function
     * @return {FoodDao} the Singleton Instance of the FoodDao
     */
    public static getInstance(): FoodDao {
        return this.foodDao;
    }

    public async createFood(food: Food): Promise<Food> {
        return FoodModel
            .create(food);
    }

    public async findAllFood(): Promise<Food[]> {
        return FoodModel
            .find()
            .populate("nutrition");
    }

    public async findFoodById(fid: ObjectId): Promise<Food | null> {
        return FoodModel
            .findById(fid)
            .populate("nutrition");
    }

    public async updateFoodById(fid: ObjectId, food: Food): Promise<object> {
        return FoodModel
            .updateOne({_id: fid}, {$set: food})
    }

    public async deleteAllFood(): Promise<object> {
        return FoodModel
            .deleteMany();
    }

    public async deleteFoodById(fid: ObjectId): Promise<object> {
        return FoodModel.deleteOne({_id: fid});
    }
}