/**
 * @file Implements APIs for Group related data access object methods
 */
import {Group} from "../models/Group";
import {GroupModel} from "../mongoose/group/GroupModel";
import {GroupDaoI} from "./interfaces/GroupDaoI";
import {ObjectId} from 'bson';

/**
 * @class GroupDao GroupDao Implements the GroupDaoI, with all the CRUD functionalities for the Group resource
 * @property {GroupDao} groupDao - Singleton DAO implementing Group CRUD operations
 */
export class GroupDao implements GroupDaoI {
    private static groupDao: GroupDao = new GroupDao();

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * Returns the Singleton Instance of the GroupDao
     * @function
     * @return {GroupDao} the Singleton Instance of the GroupDao
     */
    public static getInstance(): GroupDao {
        return this.groupDao;
    }

    public async createGroup(group: Group): Promise<Group> {
        return GroupModel
            .create(group);
    }

    public async findAllGroups(): Promise<Group[]> {
        return GroupModel
            .find()
            .populate({
                path: 'kitchen',
                populate: {
                    path: 'locations',
                },
            })
            .populate('members');
    }

    public async findGroupById(gid: ObjectId): Promise<Group | null> {
        return GroupModel.findById(gid)
            .populate({
                path: 'kitchen',
                populate: {
                    path: 'locations',
                },
            })
            .populate('members');
    }

    public async findGroupByName(name: string): Promise<Group | null> {
        return GroupModel
            .findOne({name: name})
            .populate({
                path: 'kitchen',
                populate: {
                    path: 'locations',
                },
            })
            .populate('members');
    }

    public async updateGroupById(gid: ObjectId, group: Group): Promise<object> {
        return GroupModel
            .updateOne({_id: gid}, {$set: group});
    }

    public async updateGroupByName(name: string, group: Group): Promise<object> {
        return GroupModel
            .updateOne({name: name}, {$set: group});
    }

    public async deleteAllGroups(): Promise<object> {
        return GroupModel
            .deleteMany();
    }

    public async deleteGroupById(gid: ObjectId): Promise<object> {
        return GroupModel
            .deleteOne({_id: gid});
    }

    public async deleteGroupByName(name: string): Promise<object> {
        return GroupModel
            .deleteOne({name: name});
    }
}
