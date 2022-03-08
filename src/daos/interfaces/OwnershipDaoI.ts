/**
 * @file Declares API for ownership related data access object methods
 */
import {Ownership} from "../../models/Ownership";
import {ObjectId} from 'bson';

export interface OwnershipDaoI {
    /**
     * Adds Food with the given FID to the user with the passed in UID
     * @param uid {ObjectId} - the UID of the user
     * @param fid {ObjectId} - the FID of the food
     * @param metadata {Ownership} - details about quantity and price of the Food
     * @return {Promise<Ownership>} - promise containing the created Ownership object
     */
    addFoodToUser(uid: ObjectId, fid: ObjectId, metadata: Ownership): Promise<Ownership>;

    /**
     * Get Ownership object with passed in OID
     * @param oid {ObjectId} - the OID of the transaction
     * @return {Promise<Ownership | null>} - promise containing the Ownership data requested
     */
    getOwnershipDataById(oid: ObjectId): Promise<Ownership | null>;

    /**
     * Get all objects of given username
     * @param uname {string} - the 'username' of the User'
     * @return {Promise<Ownership[] | null>} - promise containing the Ownership data requested
     */
    getOwnershipDataByUsername(uname: string): Promise<Ownership[] | null>;

    /**
     * Get All Ownership objects from DB
     * @return {Promise<object>} - promise containing the status of the delete operation
     */
    getAllOwnershipData(): Promise<Ownership[]>;

    /**
     * Update Ownership object with passed in OID
     * @param oid {ObjectId} - the OID of the transaction
     * @param metadata {Ownership} - updated details about the transaction
     * @return {Promise<object>} - promise containing the status of the update operation
     */
    updateOwnershipDataById(oid: ObjectId, metadata: Ownership): Promise<object>;

    /**
     * Removes the passed in OID from the DB
     * @param oid {ObjectId} - the OID of the transaction
     * @return {Promise<object>} - promise containing the status of the delete operation
     */
    removeFoodFromUserById(oid: ObjectId): Promise<object>;

    /**
     * Removes all items of given username
     * @param uname {string} - the username of the user
     * @return {Promise<object>} - promise containing the status of the delete operation
     */
    removeFoodFromUserByUsername(uname: string): Promise<object>;

    /**
     * Removes all OID from the DB
     * @return {Promise<object>} - promise containing the status of the delete operation
     */
    resetAllOwnerships(): Promise<object>;
}
