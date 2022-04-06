/**
 * @file Controller RESTful Web service API for {@link Nutrition} resource
 */
import {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import {NutritionDao} from "../daos/NutritionDao";
import {NutritionControllerI} from "./interfaces/NutritionControllerI";
import {ObjectId} from 'bson';

export class NutritionController implements NutritionControllerI {
    private static nutritionDao: NutritionDao;
    private static nutritionController: NutritionController | null = null;

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * @param app {Express} the Express instance to attach the controller to
     * @return {NutritionController} the singleton NutritionController instance
     */
    public static getInstance(app: Express): NutritionController {
        if (NutritionController.nutritionController === null) {
            NutritionController.nutritionController = new NutritionController();
            NutritionController.nutritionDao = NutritionDao.getInstance();

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());

            app.post("/nutrition", NutritionController.nutritionController.addNutritionData);
            app.get("/nutrition", NutritionController.nutritionController.getAllNutritionData);
            app.get("/nutrition/:id", NutritionController.nutritionController.getNutritionDataById);
            app.get("/nutrition/upc/:upc", NutritionController.nutritionController.getNutritionDataByUpc);
            app.put("/nutrition/:id", NutritionController.nutritionController.updateNutritionDataById);
            app.delete("/nutrition/:id", NutritionController.nutritionController.deleteNutritionDataById);
            app.delete("/nutrition", NutritionController.nutritionController.deleteAllNutritionData);
        }
        return NutritionController.nutritionController;
    }

    public addNutritionData(req: Request, res: Response): void {
        console.info(`nutrition: addNutritionData()  ${req.body}`);

        NutritionController.nutritionDao.addNutritionData(req.body)
            .then((nutrition) => res.json(nutrition))
            .catch((status) => res.json(status));
    }

    public getAllNutritionData(req: Request, res: Response): void {
        console.info(`nutrition: getAllNutritionData()`);

        NutritionController.nutritionDao.getAllNutritionData()
            .then((nutrition) => res.json(nutrition))
            .catch((status) => res.json(status));
    }

    public getNutritionDataById(req: Request, res: Response): void {
        console.info(`nutrition: getNutritionDataById(${req.params.id})`);

        NutritionController.nutritionDao.getNutritionDataById(new ObjectId(req.params.id))
            .then((nutrition) => res.json(nutrition))
            .catch((status) => res.json(status));
    }

    public getNutritionDataByUpc(req: Request, res: Response): void {
        console.info(`nutrition: getNutritionDataByUpc(${req.params.upc})`);

        NutritionController.nutritionDao.getNutritionDataByUpc(req.params.upc)
            .then((nutrition) => res.json(nutrition))
            .catch((status) => res.json(status));
    }

    public updateNutritionDataById(req: Request, res: Response): void {
        console.info(`nutrition: updateNutritionDataById(${req.params.id}) ${req.body}`);

        NutritionController.nutritionDao.updateNutritionDataById(new ObjectId(req.params.id), req.body)
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public deleteAllNutritionData(req: Request, res: Response): void {
        console.info(`nutrition: deleteAllNutritionData()`);

        NutritionController.nutritionDao.deleteAllNutritionData()
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public deleteNutritionDataById(req: Request, res: Response): void {
        console.info(`nutrition: deleteNutritionDataById(${req.params.id})`);

        NutritionController.nutritionDao.deleteNutritionDataById(new ObjectId(req.params.id))
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }
}