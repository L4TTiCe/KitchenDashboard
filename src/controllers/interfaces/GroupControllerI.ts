/**
 * @file Declares the interface for the GroupController that handles API calls that deal
 * with the Group resource
 */
import {Request, Response} from "express";

export interface GroupControllerI {
    createGroup(req: Request, res: Response): void;

    findAllGroups(req: Request, res: Response): void;

    findGroupById(req: Request, res: Response): void;

    findGroupByName(req: Request, res: Response): void;

    updateGroupById(req: Request, res: Response): void;

    updateGroupByName(req: Request, res: Response): void;

    deleteAllGroups(req: Request, res: Response): void;

    deleteGroupById(req: Request, res: Response): void;

    deleteGroupByName(req: Request, res: Response): void;
}
