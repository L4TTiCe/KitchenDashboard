/**
 * @file Controller RESTful Web service API for {@link Kitchen} resource
 */
import {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import {FoodDao} from "../daos/FoodDao";
import {FoodControllerI} from "./interfaces/FoodControllerI";
import {ObjectId} from 'bson';

export class FoodController implements FoodControllerI {
    private static foodDao: FoodDao;
    private static foodController: FoodController | null = null;

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * @param app {Express} the Express instance to attach the controller to
     * @return {KitchenController} the singleton KitchenController instance
     */
    public static getInstance(app: Express): FoodController {
        if (FoodController.foodController === null) {
            FoodController.foodController = new FoodController();
            FoodController.foodDao = FoodDao.getInstance();

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());

            app.post("/food", FoodController.foodController.createFood);
            app.get("/food", FoodController.foodController.findAllFood);
            app.get("/food/:id", FoodController.foodController.findFoodById);
            app.put("/food/:id", FoodController.foodController.updateFoodById);
            app.delete("/food", FoodController.foodController.deleteAllFood);
            app.delete("/food/:id", FoodController.foodController.deleteFoodById);
        }
        return FoodController.foodController;
    }

    public createFood(req: Request, res: Response): void {
        console.info(`food: createFood() ${req.body}`);

        FoodController.foodDao.createFood(req.body)
            .then((food) => res.json(food))
            .catch((status) => res.json(status));
    }

    public findAllFood(req: Request, res: Response): void {
        console.info(`food: findAllFood()`);

        FoodController.foodDao.findAllFood()
            .then((food) => res.json(food))
            .catch((status) => res.json(status));
    }

    public findFoodById(req: Request, res: Response): void {
        console.info(`food: findFoodById(${req.params.id})`);

        FoodController.foodDao.findFoodById(new ObjectId(req.params.id))
            .then((food) => res.json(food))
            .catch((status) => res.json(status));
    }

    public updateFoodById(req: Request, res: Response): void {
        console.info(`food: updateFoodById(${req.params.id}) ${req.body}`);

        FoodController.foodDao.updateFoodById(new ObjectId(req.params.id), req.body)
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public deleteAllFood(req: Request, res: Response): void {
        console.info(`food: deleteAllFood()`);

        FoodController.foodDao.deleteAllFood()
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public deleteFoodById(req: Request, res: Response): void {
        console.info(`food: deleteFoodById(${req.params.id})`);

        FoodController.foodDao.deleteFoodById(new ObjectId(req.params.id))
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }
}
