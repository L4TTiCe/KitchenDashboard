/**
 * @file Implements APIs for kitchen related data access object methods
 */
import {Kitchen} from "../models/Kitchen";
import {KitchenModel} from "../mongoose/kitchen/KitchenModel"
import {KitchenDaoI} from "./interfaces/KitchenDaoI";

/**
 * @class KitchenDao KitchenDao Implements the KitchenDaoI, with all the CRUD functionalities for the Group resource
 * @property {KitchenDao} kitchenDao - Singleton DAO implementing Kitchen CRUD operations
 */
export class KitchenDao implements KitchenDaoI {
    private static kitchenDao: KitchenDao = new KitchenDao();

    // Prevent Initiation of Object
    private constructor() {
    }

    /**
     * Returns the Singleton Instance of the KitchenDao
     * @function
     * @return {KitchenDao} the Singleton Instance of the KitchenDao
     */
    public static getInstance(): KitchenDao {
        return this.kitchenDao;
    }

    public async createKitchen(kitchen: Kitchen): Promise<Kitchen> {
        return KitchenModel
            .create(kitchen);
    }

    public async findAllKitchens(): Promise<Kitchen[]> {
        return KitchenModel
            .find();
    }

    public async findKitchenById(kid: string): Promise<Kitchen | null> {
        return KitchenModel
            .findById(kid);
    }

    public async updateKitchenById(kid: string, kitchen: Kitchen): Promise<object> {
        return KitchenModel
            .updateOne({_id: kid}, {$set: kitchen});
    }

    public async deleteAllKitchens(): Promise<object> {
        return KitchenModel.deleteMany();
    }

    public async deleteKitchenById(kid: string): Promise<object> {
        return KitchenModel
            .deleteOne({_id: kid})
    }
}