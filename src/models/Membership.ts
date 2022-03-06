/**
 * Represents a User registering as a member of a group
 * @typedef {Location} Location
 */
import {User} from "./User";
import {Group} from "./Group";

export interface Membership {
    member: User;
    group: Group;
}
