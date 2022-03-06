/**
 * Represents a Group of Users using a shared kitchen
 * @typedef {Group} Group
 */
import {User} from "./User";

export interface Group {
    _id: string
    name: string;
    createdOn: Date;
    members: User[];
}
