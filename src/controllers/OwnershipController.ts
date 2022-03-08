/**
 * @file Controller RESTful Web service API for {@link Ownership} resource
 */
import {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import {OwnershipDao} from "../daos/OwnershipDao";
import {OwnershipControllerI} from "./interfaces/OwnershipControllerI";
import {ObjectId} from 'bson';

export class OwnershipController implements OwnershipControllerI {
    private static ownershipDao: OwnershipDao;
    private static ownershipController: OwnershipController | null = null;

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * @param app {Express} the Express instance to attach the controller to
     * @return {MembershipController} the singleton MembershipController instance
     */
    public static getInstance(app: Express): OwnershipController {
        if (OwnershipController.ownershipController === null) {
            OwnershipController.ownershipController = new OwnershipController();
            OwnershipController.ownershipDao = OwnershipDao.getInstance();

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());

            app.post("/users/byId/:uid/inventory/:fid", OwnershipController.ownershipController.addFoodToUser);
            app.get("/inventory/ById/:id", OwnershipController.ownershipController.getOwnershipDataById);
            app.get("/inventory", OwnershipController.ownershipController.getAllOwnershipData);
            app.get("/inventory/:uname", OwnershipController.ownershipController.getOwnershipDataByUsername);
            app.put("/inventory/ById/:id", OwnershipController.ownershipController.updateOwnershipDataById);
            app.delete("/inventory/:uname", OwnershipController.ownershipController.removeFoodFromUserByUsername);
            app.delete("/inventory", OwnershipController.ownershipController.resetAllOwnerships);
        }
        return OwnershipController.ownershipController;
    }

    public addFoodToUser(req: Request, res: Response): void {
        console.info(`ownership: addFoodToUser(uid: ${req.params.uid}, fid: ${req.params.fid})  ${req.body}`);

        OwnershipController.ownershipDao.addFoodToUser(new ObjectId(req.params.uid), new ObjectId(req.params.fid), req.body)
            .then((ownership) => res.json(ownership))
            .catch((status) => res.json(status));
    }

    public getOwnershipDataById(req: Request, res: Response): void {
        console.info(`ownership: getOwnershipDataById(uid: ${req.params.id})`);

        OwnershipController.ownershipDao.getOwnershipDataById(new ObjectId(req.params.id))
            .then((ownership) => res.json(ownership))
            .catch((status) => res.json(status));
    }

    public getOwnershipDataByUsername(req: Request, res: Response): void {
        console.info(`ownership: getOwnershipDataByUsername(uname: ${req.params.uname})`);

        OwnershipController.ownershipDao.getOwnershipDataByUsername(req.params.uname)
            .then((ownerships) => res.json(ownerships))
            .catch((status) => res.json(status));
    }

    public getAllOwnershipData(req: Request, res: Response): void {
        console.info(`ownership: getAllOwnershipData()`);

        OwnershipController.ownershipDao.getAllOwnershipData()
            .then((ownerships) => res.json(ownerships))
            .catch((status) => res.json(status));
    }

    public updateOwnershipDataById(req: Request, res: Response): void {
        console.info(`ownership: updateOwnershipDataById(uid: ${req.params.id}) ${req.body}`);

        OwnershipController.ownershipDao.updateOwnershipDataById(new ObjectId(req.params.id), req.body)
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public removeFoodFromUserById(req: Request, res: Response): void {
        console.info(`ownership: removeFoodFromUserById(uid: ${req.params.id})`);

        OwnershipController.ownershipDao.removeFoodFromUserById(new ObjectId(req.params.id))
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public removeFoodFromUserByUsername(req: Request, res: Response): void {
        console.info(`ownership: removeFoodFromUserByUsername(uname: ${req.params.uname})`);

        OwnershipController.ownershipDao.removeFoodFromUserByUsername(req.params.uname)
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public resetAllOwnerships(req: Request, res: Response): void {
        console.info(`ownership: resetAllOwnerships()`);

        OwnershipController.ownershipDao.resetAllOwnerships()
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }
}
