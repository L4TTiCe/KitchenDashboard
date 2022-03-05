/**
 * @file Implements APIs for User related data access object methods
 */
import {User} from "../models/User";
import {UserModel} from "../mongoose/user/UserModel";
import {UserDaoI} from "./interfaces/UserDaoI";

/**
 * @class UserDao UserDao Implements the UserDaoI, with all the CRUD functionalities for the User resource
 * @property {UserDao} userDao - Singleton DAO implementing User CRUD operations
 */
export class UserDao implements UserDaoI {
    private static userDao: UserDao = new UserDao();

    // Prevent Initiation of Object
    private constructor() {
    }

    /**
     * Returns the Singleton Instance of the UserDao
     * @function
     * @return {UserDao} the Singleton Instance of the UserDao
     */
    public static getInstance(): UserDao {
        return this.userDao;
    }

    public async createUser(user: User): Promise<User> {
        return UserModel
            .create(user);
    }

    public async findAllUsers(): Promise<User[]> {
        return UserModel
            .find()
            .populate('group')
            .select({password: 0});
    }

    public async findUserById(uid: string): Promise<User> {
        return UserModel
            .findById(uid)
            .populate('group')
            .select({password: 0});
    }

    public async findUserByUsername(uname: string): Promise<User> {
        return UserModel
            .findOne({username: uname})
            .populate('group')
            .select({password: 0});
    }

    public async findUserByCredentials(username: string, password: string): Promise<User | null> {
        return UserModel.findOne({username: username, password: password}).populate('group');
    }

    public async updateUserById(uid: string, user: User): Promise<object> {
        return UserModel
            .updateOne({_id: uid}, {$set: user});
    }

    public async updateUserByUsername(uname: string, user: User): Promise<object> {
        return UserModel
            .updateOne({username: uname}, {$set: user});
    }

    public async deleteAllUsers(): Promise<object> {
        return UserModel
            .deleteMany();
    }

    public async deleteUserById(uid: string): Promise<object> {
        return UserModel
            .deleteOne({_id: uid});
    }

    public async deleteUserByUsername(uname: string): Promise<object> {
        return UserModel
            .deleteOne({username: uname});
    }
}