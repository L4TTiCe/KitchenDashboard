/**
 * @file Declares the interface for the KitchenController that handles API calls that deal
 * with the location resource
 */
import {Request, Response} from "express";

export interface LocationControllerI {
    createSubLocation(req: Request, res: Response): void;

    getAllLocations(req: Request, res: Response): void;

    getLocationById(req: Request, res: Response): void;

    updateLocationById(req: Request, res: Response): void;

    deleteLocationById(req: Request, res: Response): void;

    deleteAllLocations(req: Request, res: Response): void;
}
