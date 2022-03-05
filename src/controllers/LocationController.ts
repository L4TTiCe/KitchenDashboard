/**
 * @file Controller RESTful Web service API for {@link Location} resource
 */
import {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import {LocationDao} from "../daos/LocationDao";
import {LocationControllerI} from "./interfaces/LocationControllerI";
import {Location} from "../models/Location";

export class LocationController implements LocationControllerI {
    private static locationDao: LocationDao;
    private static locationController: LocationController | null = null;

    // Prevent Initiation of Object
    private constructor() {
    }

    /**
     * @param app {Express} the Express instance to attach the controller to
     * @return {LocationController} the singleton LocationController instance
     */
    public static getInstance(app: Express): LocationController {
        if (LocationController.locationController === null) {
            LocationController.locationController = new LocationController();
            LocationController.locationDao = LocationDao.getInstance();

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());

            app.post("/locations/:id", LocationController.locationController.createSubLocation);
            app.get("/locations", LocationController.locationController.getAllLocations);
            app.get("/locations/:id", LocationController.locationController.getLocationById);
            app.put("/locations/:id", LocationController.locationController.updateLocationById);
            app.delete("/locations/:id", LocationController.locationController.deleteLocationById);
            app.delete("/locations", LocationController.locationController.deleteAllLocations);
        }
        return LocationController.locationController;
    }

    public createSubLocation(req: Request, res: Response): void {
        console.info(`location: createSubLocation(${req.params.id}) ${req.body}`);

        LocationController.locationDao.createSubLocation(req.params.id, req.body)
            .then((location) => res.json(location))
            .catch((status) => res.json(status));
    }

    public getAllLocations(req: Request, res: Response): void {
        console.info(`location: getAllLocations()`);

        LocationController.locationDao.getAllLocations()
            .then((locations) => res.json(locations))
            .catch((status) => res.json(status));
    }

    public getLocationById(req: Request, res: Response): void {
        console.info(`location: getLocationById(${req.params.id})`);

        LocationController.locationDao.getLocationById(req.params.id)
            .then((location) => res.json(location))
            .catch((status) => res.json(status));
    }

    public updateLocationById(req: Request, res: Response): void {
        console.info(`location: updateLocationById(${req.params.id}) ${req.body}`);

        LocationController.locationDao.updateLocationById(req.params.id, req.body)
            .then((location) => res.json(location))
            .catch((status) => res.json(status));
    }

    public deleteLocationById(req: Request, res: Response): void {
        console.info(`location: deleteLocationById(${req.params.id})`);

        LocationController.locationDao.deleteLocationById(req.params.id)
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public deleteAllLocations(req: Request, res: Response): void {
        console.info(`location: deleteAllLocations()`);

        LocationController.locationDao.deleteAllLocations()
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }
}
