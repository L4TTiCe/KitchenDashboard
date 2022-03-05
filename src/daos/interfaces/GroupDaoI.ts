/**
 * @file Declares API for Group related data access object methods
 */
import {Group} from "../../models/Group";

export interface GroupDaoI {
    /**
     * Creates a {@link Group} with the given data
     * @param group {Group} - the data to be used to create the Group
     * @return {Promise<Group>} - promise containing the Group created with the given data
     */
    createGroup(group: Group): Promise<Group>;

    /**
     * Returns all the {@link Group}s
     * @return {Promise<Group[]>} - Promise containing all the Groups
     */
    findAllGroups(): Promise<Group[]>;

    /**
     * Returns the {@link Group} with the given GID
     * @param gid {string} - the GID of the Group to be returned
     * @return {Promise<Group>} - promise containing the Group with the given GID
     */
    findGroupById(gid: string): Promise<Group | null>;

    /**
     * Returns the {@link Group} with the given name
     * @param name {string} - the name of the Group to be returned
     * @return {Promise<Group>} - promise containing the Group with the given GID
     */
    findGroupByName(name: string): Promise<Group | null>;

    /**
     * Updates the {@link Group} with their GID and returns the updated Group
     * @param gid {string} - the GID of the Group to be updated
     * @param group {Group} - the data to be used to update the Group
     * @return {Promise<Group>} - promise containing the Group updated with the given data
     */
    updateGroupById(gid: string, group: Group): Promise<object>;

    /**
     * Updates the {@link Group} by their name and returns the updated Group
     * @param name {string} - the name of the Group to be updated
     * @param group {Group} - the data to be used to update the Group
     * @return {Promise<Group>} - promise containing the Group updated with the given data
     */
    updateGroupByName(name: string, group: Group): Promise<object>;

    /**
     * Deletes all Groups in the DB
     * @return {Promise<object>} the status of the delete operation
     */
    deleteAllGroups(): Promise<object>;

    /**
     * Deleted the {@link Group} by GID
     * @param gid {string} - the GID of the Group to be deleted
     * @return {Promise<object>} the status of the delete operation
     */
    deleteGroupById(gid: string): Promise<object>;

    /**
     * Deleted the {@link Group} by name
     * @param name {string} - the name of the Group to be deleted
     * @return {Promise<object>} the status of the delete operation
     */
    deleteGroupByName(name: string): Promise<object>;
}
