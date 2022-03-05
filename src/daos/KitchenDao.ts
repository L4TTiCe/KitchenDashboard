/**
 * @file Implements APIs for kitchen related data access object methods
 */
import {Kitchen} from "../models/Kitchen";
import {KitchenModel} from "../mongoose/kitchen/KitchenModel"
import {KitchenDaoI} from "./interfaces/KitchenDaoI";
import {Location} from "../models/Location";
import {LocationModel} from "../mongoose/location/LocationModel";

/**
 * @class KitchenDao KitchenDao Implements the KitchenDaoI, with all the CRUD functionalities for the Kitchen resource
 * @property {KitchenDao} kitchenDao - Singleton DAO implementing Kitchen CRUD operations
 */
export class KitchenDao implements KitchenDaoI {
    private static kitchenDao: KitchenDao = new KitchenDao();

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
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
            .find()
            .populate('locations');
    }

    public async findKitchenById(kid: string): Promise<Kitchen | null> {
        return KitchenModel
            .findById(kid)
            .populate('locations');
    }

    public async createLocation(kid: string, location: Location): Promise<object> {
        const createdLocation = await LocationModel.create(location);
        return KitchenModel
            .updateOne({_id: kid}, {$push: {locations: createdLocation._id}});
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
