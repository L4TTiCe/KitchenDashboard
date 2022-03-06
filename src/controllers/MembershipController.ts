/**
 * @file Controller RESTful Web service API for {@link Membership} resource
 */
import {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import {MembershipDao} from "../daos/MembershipDao";
import {MembershipControllerI} from "./interfaces/MembershipControllerI";

export class MembershipController implements MembershipControllerI {
    private static membershipDao: MembershipDao;
    private static membershipController: MembershipController | null = null;

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * @param app {Express} the Express instance to attach the controller to
     * @return {MembershipController} the singleton MembershipController instance
     */
    public static getInstance(app: Express): MembershipController {
        if (MembershipController.membershipController === null) {
            MembershipController.membershipController = new MembershipController();
            MembershipController.membershipDao = MembershipDao.getInstance();

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());

            app.post("/groups/byId/:gid/add/:uid", MembershipController.membershipController.addUserToGroupById);
            app.post("/groups/:gname/add/:uname", MembershipController.membershipController.addUserToGroup);
            app.delete("/groups/byId/:gid/add/:uid", MembershipController.membershipController.removeUserFromGroupById);
            app.delete("/groups/:gname/add/:uname", MembershipController.membershipController.removeUserFromGroup);
            app.delete("/groups/debug/all", MembershipController.membershipController.resetMemberships);
        }
        return MembershipController.membershipController;
    }

    public addUserToGroupById(req: Request, res: Response): void {
        console.info(`membership: addUserToGroupById(gid: ${req.params.gid}, uid: ${req.params.uid})`);

        MembershipController.membershipDao.addUserToGroupById(req.params.uid, req.params.gid)
            .then((membership) => res.json(membership))
            .catch((status) => res.json(status));
    }

    public addUserToGroup(req: Request, res: Response): void {
        console.info(`membership: addUserToGroup(gname: ${req.params.gname}, uname: ${req.params.uname})`);

        MembershipController.membershipDao.addUserToGroup(req.params.uname, req.params.gname)
            .then((membership) => res.json(membership))
            .catch((status) => res.json(status));
    }

    public removeUserFromGroupById(req: Request, res: Response): void {
        console.info(`membership: removeUserFromGroupById(gid: ${req.params.gid}, uid: ${req.params.uid})`);

        MembershipController.membershipDao.removeUserFromGroupById(req.params.uid, req.params.gid)
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public removeUserFromGroup(req: Request, res: Response): void {
        console.info(`membership: removeUserFromGroup(gname: ${req.params.gname}, uname: ${req.params.uname})`);

        MembershipController.membershipDao.removeUserFromGroup(req.params.uname, req.params.gname)
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public resetMemberships(req: Request, res: Response): void {
        console.info(`membership: resetMemberships()`);

        MembershipController.membershipDao.resetMemberships()
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }
}