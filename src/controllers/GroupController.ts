/**
 * @file Controller RESTful Web service API for {@link Group} resource
 */
import {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import {GroupDao} from "../daos/GroupDao";
import {GroupControllerI} from "./interfaces/GroupControllerI";
import {Group} from "../models/Group";
import {ObjectId} from 'bson';

export class GroupController implements GroupControllerI {
    private static groupDao: GroupDao;
    private static groupController: GroupController | null = null;

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * @param app {Express} the Express instance to attach the controller to
     * @return {GroupController} the singleton GroupController instance
     */
    public static getInstance(app: Express): GroupController {
        if (GroupController.groupController === null) {
            GroupController.groupController = new GroupController();
            GroupController.groupDao = GroupDao.getInstance();

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());

            app.post("/groups", GroupController.groupController.createGroup);
            app.get("/groups", GroupController.groupController.findAllGroups);
            app.get("/groups/byId/:id", GroupController.groupController.findGroupById);
            app.get("/groups/:name", GroupController.groupController.findGroupByName);
            app.put("/groups/byId/:id", GroupController.groupController.updateGroupById);
            app.put("/groups/:name", GroupController.groupController.updateGroupByName);
            app.delete("/groups", GroupController.groupController.deleteAllGroups);
            app.delete("/groups/byId/:id", GroupController.groupController.deleteGroupById);
            app.delete("/groups/:name", GroupController.groupController.deleteGroupByName);
        }
        return GroupController.groupController;
    }

    public async createGroup(req: Request, res: Response): Promise<void> {
        console.info(`group: createGroup() ${req.body}`);

        const group = await GroupController.groupDao.findGroupByName(req.body.name)

        if (group == null) {
            GroupController.groupDao.createGroup(req.body)
                .then((group) => res.json(group))
                .catch((status) => res.json(status));
            console.info(`group: ${req.body.name} Created`);
        } else {
            console.info(`group: Already Exists`);
            res.status(409).send({
                message: `Group with name ${req.body.name} Already Exists!`
            });
        }
    }

    public findAllGroups(req: Request, res: Response): void {
        console.info(`group: findAllGroups()`);

        GroupController.groupDao.findAllGroups()
            .then((groups: Group[]) => res.json(groups))
            .catch((status) => res.json(status));
    }

    public findGroupById(req: Request, res: Response): void {
        console.info(`group: findGroupById(${req.params.id})`);

        GroupController.groupDao.findGroupById(new ObjectId(req.params.id))
            .then((group) => res.json(group))
            .catch((status) => res.json(status));
    }

    public findGroupByName(req: Request, res: Response): void {
        console.info(`group: findGroupByName(${req.params.name})`);

        GroupController.groupDao.findGroupByName(req.params.name)
            .then((group) => res.json(group))
            .catch((status) => res.json(status));
    }

    public updateGroupById(req: Request, res: Response): void {
        console.info(`group: updateGroupById(${req.params.id}) `, req.body);

        GroupController.groupDao.updateGroupById(new ObjectId(req.params.id), req.body)
            .then((group) => res.json(group))
            .catch((status) => res.json(status));
    }

    public updateGroupByName(req: Request, res: Response): void {
        console.info(`group: updateGroupByName(${req.params.name}) `, req.body);

        GroupController.groupDao.updateGroupByName(req.params.name, req.body)
            .then((group) => res.json(group))
            .catch((status) => res.json(status));
    }

    public deleteAllGroups(req: Request, res: Response): void {
        console.info(`group: deleteAllGroups() `);

        GroupController.groupDao.deleteAllGroups()
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public deleteGroupById(req: Request, res: Response): void {
        console.info(`group: deleteGroupById(${req.params.id})`);

        GroupController.groupDao.deleteGroupById(new ObjectId(req.params.id))
            .then((group) => res.json(group))
            .catch((status) => res.json(status));
    }

    public deleteGroupByName(req: Request, res: Response): void {
        console.info(`group: deleteGroupByName(${req.params.name})`);

        GroupController.groupDao.deleteGroupByName(req.params.name)
            .then((group) => res.json(group))
            .catch((status) => res.json(status));
    }
}
