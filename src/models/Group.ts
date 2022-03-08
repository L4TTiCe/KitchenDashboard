import {User} from "./User";
import {ObjectId} from 'bson';

/**
 * Represents a Group of Users using a shared kitchen
 * @typedef {Group} Group
 */
export interface Group {
    _id: ObjectId;
    name: string;
    createdOn: Date;
    members: User[];
}
