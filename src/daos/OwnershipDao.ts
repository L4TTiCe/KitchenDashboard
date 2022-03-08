/**
 * @file Implements APIs for Ownership related data access object methods
 */
import {Ownership} from "../models/Ownership";
import {OwnershipModel} from "../mongoose/ownership/OwnershipModel";
import {OwnershipDaoI} from "./interfaces/OwnershipDaoI";
import {UserDao} from "./UserDao";
import {FoodDao} from "./FoodDao";
import {ObjectId} from 'bson';

/**
 * @class OwnershipDao OwnershipDao Implements the OwnershipDaoI, with all the CRUD functionalities for the
 * ownership resource
 * @property {OwnershipDao} OwnershipDao - Singleton DAO implementing Ownership CRUD operations
 */
export class OwnershipDao implements OwnershipDaoI {
    private static ownershipDao: OwnershipDao = new OwnershipDao();

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * Returns the Singleton Instance of the OwnershipDao
     * @function
     * @return {OwnershipDao} the Singleton Instance of the OwnershipDao
     */
    public static getInstance(): OwnershipDao {
        return this.ownershipDao;
    }

    public async addFoodToUser(uid: ObjectId, fid: ObjectId, metadata: Ownership): Promise<Ownership> {
        const data: Ownership = metadata;
        const user = await UserDao.getInstance().findUserById(uid);
        const food = await FoodDao.getInstance().findFoodById(fid);

        if (food) {
            data.food = food;
        }
        if (user) {
            data.owner = user;
        }

        return OwnershipModel.create(data);
    }

    public async getOwnershipDataById(oid: ObjectId): Promise<Ownership | null> {
        return OwnershipModel
            .findById(oid)
            .populate("owner food");
    }

    public async getOwnershipDataByUsername(uname: string): Promise<Ownership[] | null> {
        const user = await UserDao.getInstance().findUserByUsername(uname);
        return OwnershipModel
            .find({owner: user})
            .populate("owner food");
    }

    public async getAllOwnershipData(): Promise<Ownership[]> {
        return OwnershipModel
            .find()
            .populate("owner food");
    }

    public async updateOwnershipDataById(oid: ObjectId, metadata: Ownership): Promise<object> {
        return OwnershipModel.updateOne({_id: oid}, {$set: metadata});
    }

    public async removeFoodFromUserById(oid: ObjectId): Promise<object> {
        return OwnershipModel
            .deleteOne({_id: oid});
    }

    public async removeFoodFromUserByUsername(uname: string): Promise<object> {
        const user = await UserDao.getInstance().findUserByUsername(uname);
        return OwnershipModel
            .deleteMany({owner: user});
    }

    public async resetAllOwnerships(): Promise<object> {
        return OwnershipModel
            .deleteMany();
    }
}
