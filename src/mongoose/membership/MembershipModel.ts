/**
 * @file Implements mongoose model to CRUD
 * documents in the membership collection
 */
import mongoose from "mongoose"
import {MembershipSchema} from "./MembershipSchema"

/**
 * The MembershipSchema is used for creating and reading documents of the {@link Membership} type defined by the
 * {@link MembershipSchema} from the underlying MongoDB database.
 * @typedef {MembershipModel} MembershipModel
 */
export const MembershipModel = mongoose.model("MembershipModel", MembershipSchema)
