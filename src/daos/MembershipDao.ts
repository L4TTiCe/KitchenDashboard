/**
 * @file Implements APIs for Food related data access object methods
 */
import {Membership} from "../models/Membership";
import {MembershipModel} from "../mongoose/membership/MembershipModel";
import {MembershipDaoI} from "./interfaces/MembershipDaoI";
import {UserDao} from "./UserDao";
import {GroupDao} from "./GroupDao";
import {GroupModel} from "../mongoose/group/GroupModel";

/**
 * @class MembershipDao MembershipDao Implements the MembershipDaoI, with all the CRUD functionalities for the
 * membership resource
 * @property {MembershipDao} MembershipDao - Singleton DAO implementing Membership CRUD operations
 */
export class MembershipDao implements MembershipDaoI {
    private static membershipDao: MembershipDao = new MembershipDao();

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * Returns the Singleton Instance of the MembershipDao
     * @function
     * @return {MembershipDao} the Singleton Instance of the MembershipDao
     */
    public static getInstance(): MembershipDao {
        return this.membershipDao;
    }

    public async addUserToGroupById(uid: string, gid: string): Promise<Membership> {
        // const membership = await MembershipModel.create({member: uid, group: gid})
        // await GroupModel
        //     .updateOne({_id: gid}, {$push: {members: uid}});

        return MembershipModel.create({member: uid, group: gid})
    }

    public async addUserToGroup(uname: string, gname: string): Promise<Membership> {
        const user = await UserDao.getInstance().findUserByUsername(uname);
        const group = await GroupDao.getInstance().findGroupByName(gname);

        // await GroupModel  // @ts-ignore
        //     .updateOne({_id: group._id}, {$push: {members: user._id}});

        return MembershipModel.create({member: user, group: group})
    }

    public async removeUserFromGroupById(uid: string, gid: string): Promise<object> {
        // const status =  await MembershipModel.deleteOne({member: uid, group: gid})
        // await GroupModel  // @ts-ignore
        //     .updateOne({_id: gid}, {$pull: {members: uid}});
        return MembershipModel.deleteOne({member: uid, group: gid});
    }

    public async removeUserFromGroup(uname: string, gname: string): Promise<object> {
        const user = await UserDao.getInstance().findUserByUsername(uname);
        const group = await GroupDao.getInstance().findGroupByName(gname);

        // @ts-ignore
        // const status =  await MembershipModel.deleteOne({member: user._id, group: group._id})
        // console.log("Deleting User ref. from Group")
        // await GroupModel  // @ts-ignore
        //     .updateOne({_id: group._id}, {$pull: {members: user._id}});
        return MembershipModel.deleteOne({member: user._id, group: group._id});
    }

    public async resetMemberships(): Promise<object> {
        const status = await MembershipModel.deleteMany();
        await GroupModel.updateMany({}, {$set: {members: []}})
        return status;
    }
}
