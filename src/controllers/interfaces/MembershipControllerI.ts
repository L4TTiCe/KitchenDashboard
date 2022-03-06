/**
 * @file Declares the interface for the KitchenController that handles API calls that deal
 * with the membership resource
 */
import {Request, Response} from "express";

export interface MembershipControllerI {
    addUserToGroupById(req: Request, res: Response): void;

    addUserToGroup(req: Request, res: Response): void;

    removeUserFromGroupById(req: Request, res: Response): void;

    removeUserFromGroup(req: Request, res: Response): void;

    resetMemberships(req: Request, res: Response): void;
}
