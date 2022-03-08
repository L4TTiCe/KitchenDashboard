import {ObjectId} from 'bson';

/**
 * Represents Food item
 * @typedef {Food} Food
 */
export interface Food {
    _id: ObjectId;
    name: string;
    upc: string;
}
