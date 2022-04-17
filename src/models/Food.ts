import {ObjectId} from 'bson';
import {Nutrition} from "./Nutrition";

/**
 * Represents Food item
 * @typedef {Food} Food
 */
export interface Food {
    _id: ObjectId;
    name: string;
    upc: string;
    createdOn: Date;
    nutrition: Nutrition;
}
