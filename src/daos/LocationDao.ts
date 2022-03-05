/**
 * @file Implements APIs for location related data access object methods
 */
import {Location} from "../models/Location";
import {LocationModel} from "../mongoose/location/LocationModel"
import {LocationDaoI} from "./interfaces/LocationDaoI";

/**
 * @class LocationDao LocationDao Implements the LocationDaoI, with all the CRUD functionalities for
 *        the Location resource
 * @property {LocationDao} locationDao - Singleton DAO implementing Location CRUD operations
 */
export class LocationDao implements LocationDaoI {
    private static locationDao: LocationDao = new LocationDao();

    // Prevent Initiation of Object
    private constructor() {
    }  // eslint-disable-line @typescript-eslint/no-empty-function

    /**
     * Returns the Singleton Instance of the KitchenDao
     * @function
     * @return {KitchenDao} the Singleton Instance of the KitchenDao
     */
    public static getInstance(): LocationDao {
        return this.locationDao;
    }

    public async createSubLocation(lid: string, location: Location): Promise<object> {
        const createdLocation = await LocationModel.create(location)
        return LocationModel
            .updateOne({_id: lid}, {$push: {subLocations: createdLocation._id}});
    }

    public async getAllLocations(): Promise<Location[]> {
        return LocationModel
            .find()
    }

    public async getLocationById(lid: string): Promise<Location | null> {
        return LocationModel
            .findById(lid)
    }

    public async updateLocationById(lid: string, location: Location): Promise<object> {
        return LocationModel.updateOne({_id: lid}, {$set: location})
    }

    public async deleteLocationById(lid: string): Promise<object> {
        return LocationModel.deleteOne({_id: lid})
    }

    public async deleteAllLocations(): Promise<object> {
        return LocationModel.deleteMany();
    }
}
