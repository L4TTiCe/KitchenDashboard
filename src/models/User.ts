import {ObjectId} from 'bson';

/**
 * Represents a User
 * @typedef {User} User
 */
export interface User {
    _id: ObjectId;
    username: string;
    password: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    // group: Group | null;
    joinedOn: Date
}
