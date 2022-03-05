/**
 * @file Declares the interface for the GroupController that handles API calls that deal
 * with the Food resource
 */
import {Request, Response} from "express";

export interface FoodControllerI {
    createFood(req: Request, res: Response): void;

    findAllFood(req: Request, res: Response): void;

    findFoodById(req: Request, res: Response): void;

    updateFoodById(req: Request, res: Response): void;

    deleteAllFood(req: Request, res: Response): void;

    deleteFoodById(req: Request, res: Response): void;
}
