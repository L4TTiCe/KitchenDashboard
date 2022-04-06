import {ObjectId} from 'bson';

/**
 * Represents the Nutrition Information
 * @typedef {Nutrition} Nutrition
 */
export interface Nutrition {
    _id: ObjectId;
    upc: string;
    serving_size: number;
    serving_unit: string;
    calories: number;
    total_fat: number;
    carbohydrates: number;
    protein: number;
}