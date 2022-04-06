/**
 * @file Declares the interface for the NutritionController that handles API calls
 * that deal with the Nutrition resource
 */
import {Request, Response} from "express";

export interface NutritionControllerI {
    addNutritionData(req: Request, res: Response): void;

    getAllNutritionData(req: Request, res: Response): void;

    getNutritionDataById(req: Request, res: Response): void;

    getNutritionDataByUpc(req: Request, res: Response): void;

    updateNutritionDataById(req: Request, res: Response): void;

    deleteAllNutritionData(req: Request, res: Response): void;

    deleteNutritionDataById(req: Request, res: Response): void;
}
