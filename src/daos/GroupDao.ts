/**
 * @file Implements APIs for Group related data access object methods
 */
import {Group} from "../models/Group";
import {GroupModel} from "../mongoose/group/GroupModel";
import {GroupDaoI} from "./interfaces/GroupDaoI";

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
        return GroupModel.find();
    }

    public async findGroupById(gid: string): Promise<Group | null> {
        return GroupModel.findById(gid);
    }

    public async findGroupByName(name: string): Promise<Group | null> {
        return GroupModel
            .findOne({name: name});
    }

    public async updateGroupById(gid: string, group: Group): Promise<object> {
        return GroupModel
            .updateOne({_id: gid}, {$set: group});
    }

    public async updateGroupByName(name: string, group: Group): Promise<object> {
        return GroupModel
            .updateOne({name: name}, {$set: group});
    }

    public async deleteAllGroups(): Promise<object> {
        return GroupModel.deleteMany();
    }

    public async deleteGroupById(gid: string): Promise<object> {
        return GroupModel.deleteOne({_id: gid});
    }

    public async deleteGroupByName(name: string): Promise<object> {
        return GroupModel.deleteOne({name: name});
    }
}
