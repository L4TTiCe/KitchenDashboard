/**
 * @file Controller RESTful Web service API for {@link Kitchen} resource
 */
import {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import {KitchenDao} from "../daos/KitchenDao";
import {KitchenControllerI} from "./interfaces/KitchenControllerI";
import {Kitchen} from "../models/Kitchen";

export class KitchenController implements KitchenControllerI {
    private static kitchenDao: KitchenDao;
    private static kitchenController: KitchenController | null = null;

    // Prevent Initiation of Object
    private constructor() {
    }

    /**
     * @param app {Express} the Express instance to attach the controller to
     * @return {KitchenController} the singleton KitchenController instance
     */
    public static getInstance(app: Express): KitchenController {
        if (KitchenController.kitchenController === null) {
            KitchenController.kitchenController = new KitchenController();
            KitchenController.kitchenDao = KitchenDao.getInstance();

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());

            app.post("/kitchens", KitchenController.kitchenController.createKitchen);
            app.get("/kitchens", KitchenController.kitchenController.findAllKitchens);
            app.get("/kitchens/:id", KitchenController.kitchenController.findKitchenById);
            app.put("/kitchens/:id", KitchenController.kitchenController.updateKitchenById);
            app.post("/kitchens/:id/add", KitchenController.kitchenController.createLocation);
            app.delete("/kitchens", KitchenController.kitchenController.deleteAllKitchens);
            app.delete("/kitchens/:id", KitchenController.kitchenController.deleteKitchenById);
        }
        return KitchenController.kitchenController;
    }

    public createKitchen(req: Request, res: Response): void {
        console.info(`kitchen: createKitchen() ${req.body}`);

        KitchenController.kitchenDao.createKitchen(req.body)
            .then((kitchen) => res.json(kitchen))
            .catch((status) => res.json(status));
    }

    public findAllKitchens(req: Request, res: Response): void {
        console.info(`kitchen: findAllKitchens()`);

        KitchenController.kitchenDao.findAllKitchens()
            .then((kitchens) => res.json(kitchens))
            .catch((status) => res.json(status));
    }

    public findKitchenById(req: Request, res: Response): void {
        console.info(`kitchen: findKitchenById(${req.params.id})`);

        KitchenController.kitchenDao.findKitchenById(req.params.id)
            .then((kitchen) => res.json(kitchen))
            .catch((status) => res.json(status));
    }

    public createLocation(req: Request, res: Response): void {
        console.info(`kitchen: createLocation(${req.params.id}) ${req.body}`);

        KitchenController.kitchenDao.createLocation(req.params.id, req.body)
            .then((kitchen) => res.json(kitchen))
            .catch((status) => res.json(status));
    }

    public updateKitchenById(req: Request, res: Response): void {
        console.info(`kitchen: updateKitchenById(${req.params.id}) ${req.body}`);

        KitchenController.kitchenDao.updateKitchenById(req.params.id, req.body)
            .then((kitchen) => res.json(kitchen))
            .catch((status) => res.json(status));
    }

    public deleteAllKitchens(req: Request, res: Response): void {
        console.info(`kitchen: deleteAllKitchens()`);

        KitchenController.kitchenDao.deleteAllKitchens()
            .then((kitchen) => res.json(kitchen))
            .catch((status) => res.json(status));
    }

    public deleteKitchenById(req: Request, res: Response): void {
        console.info(`kitchen: deleteKitchenById(${req.params.id})`);

        KitchenController.kitchenDao.deleteKitchenById(req.params.id)
            .then((kitchen) => res.json(kitchen))
            .catch((status) => res.json(status));
    }
}
