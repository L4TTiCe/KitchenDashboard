import {Group} from "./Group";

/**
 * Represents a User
 * @typedef {User} User
 */
export interface User {
    username: string;
    password: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    group: Group | null;
    joinedOn: Date
}
