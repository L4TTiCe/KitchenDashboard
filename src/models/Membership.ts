import {User} from "./User";
import {Group} from "./Group";

/**
 * Represents a User registering as a member of a group
 * @typedef {Membership} Membership
 */
export interface Membership {
    member: User;
    group: Group;
}
