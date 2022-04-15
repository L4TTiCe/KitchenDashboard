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
    saturated_fat: number;
    trans_fat: number;
    cholesterol: number;
    sodium: number;
    total_carbohydrates: number;
    dietary_fiber: number;
    total_sugar: number;
    added_sugar: number;
    protein: number;
    description: string;
}