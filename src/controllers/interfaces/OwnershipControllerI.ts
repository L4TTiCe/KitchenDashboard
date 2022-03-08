/**
 * @file Declares the interface for the UserController that handles API calls that deal
 * with the User resource
 */
import {Request, Response} from "express";

export interface OwnershipControllerI {
    addFoodToUser(req: Request, res: Response): void;

    getOwnershipDataById(req: Request, res: Response): void;

    getOwnershipDataByUsername(req: Request, res: Response): void;

    getAllOwnershipData(req: Request, res: Response): void;

    updateOwnershipDataById(req: Request, res: Response): void;

    removeFoodFromUserById(req: Request, res: Response): void;

    removeFoodFromUserByUsername(req: Request, res: Response): void;

    resetAllOwnerships(req: Request, res: Response): void;
}
