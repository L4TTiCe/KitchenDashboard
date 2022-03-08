import {ObjectId} from 'bson';
import {User} from "./User";
import {Group} from "./Group";

/**
 * Represents a User registering as a member of a group
 * @typedef {Membership} Membership
 */
export interface Membership {
    _id: ObjectId;
    member: User;
    group: Group;
}
