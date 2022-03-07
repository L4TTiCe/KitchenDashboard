/**
 * @file Implements mongoose schema for Membership
 */
import mongoose from "mongoose";
import {GroupModel} from "../group/GroupModel";

/**
 * The LocationSchema represents how a {@link Membership} is represented in the database.
 * @typedef {MembershipSchema} MembershipSchema
 */
export const MembershipSchema = new mongoose.Schema({
    member: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel", unique: true},
    group: {type: mongoose.Schema.Types.ObjectId, ref: "GroupModel"},
    dateJoined: {type: Date, default: Date.now},
}, {collection: "membership"});

async function autoInsertIntoGroup(this: any, next: () => void) {  // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log("pre-hook running for MembershipSchema - autoInsertIntoGroup");
    // return this.model('GroupModel').updateOne({_id: this.group._id}, {$push: {members: this.member._id}});
    await GroupModel  // @ts-ignore
        .updateOne({_id: this.group._id}, {$push: {members: this.member._id}});
    next();
}

async function autoDeleteFromGroup(this: any, next: () => void) {  // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log("pre-hook running for MembershipSchema - autoDeleteFromGroup");
    await GroupModel  // @ts-ignore
        .updateOne({_id: this._conditions.group}, {$pull: {members: this._conditions.member}});
    next();
}

MembershipSchema
    .pre('save', autoInsertIntoGroup)
    .pre('deleteOne', autoDeleteFromGroup);
