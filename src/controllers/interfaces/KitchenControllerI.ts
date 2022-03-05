/**
 * @file Declares the interface for the KitchenController that handles API calls that deal
 * with the kitchen resource
 */
import {Request, Response} from "express";

export interface KitchenControllerI {
    createKitchen(req: Request, res: Response): void;

    findAllKitchens(req: Request, res: Response): void;

    findKitchenById(req: Request, res: Response): void;

    updateKitchenById(req: Request, res: Response): void;

    deleteAllKitchens(req: Request, res: Response): void;

    deleteKitchenById(req: Request, res: Response): void;
}
