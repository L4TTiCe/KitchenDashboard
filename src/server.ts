/**
 * @file server.ts serves as the entry point to the app
 */
import express, {Request, Response} from "express";
import mongoose from "mongoose";
import {UserController} from "./controllers/UserController";
import {GroupController} from "./controllers/GroupController";
import {KitchenController} from "./controllers/KitchenController";
import {LocationController} from "./controllers/LocationController";
import {FoodController} from "./controllers/FoodController";
import {MembershipController} from "./controllers/MembershipController";
import {OwnershipController} from "./controllers/OwnershipController";

/**
 * Connects to the Mongo Database with db connection details from Environment Variables
 */
const connectDatabase = (): void => {
    // Connecting to DB
    let dbUri: string = process.env.MONGODB_PREFIX + "://" + process.env.MONGODB_USER
        + ":" + process.env.MONGODB_PASSWORD + "@" + process.env.MONGODB_HOST;
    if (process.env.MONGODB_PORT) {
        dbUri = dbUri + process.env.MONGODB_PORT;
    }
    console.info("Inferred DB_URI: " + process.env.MONGODB_PREFIX + "://" + process.env.MONGODB_USER
        + ":*****@" + process.env.MONGODB_HOST);

    mongoose.connect(dbUri)
        .catch((err: object) => {
            console.log(err);
        });
    mongoose.connection.once("open", () => {
        console.info("MongoDB connection established successfully");
    });
}

/**
 * Initializes the Express app and connects the Controllers to the App
 * @return {Express} the Initialized express app
 */
const initializeApp = (): express.Express => {
    const app = express();

    UserController.getInstance(app);
    GroupController.getInstance(app);
    KitchenController.getInstance(app);
    LocationController.getInstance(app);
    FoodController.getInstance(app);
    MembershipController.getInstance(app);
    OwnershipController.getInstance(app);

    return app
}

/**
 * Starts the Server and listens on the specified PORT
 * @param port {string | number} - the port the server will listen on
 */
const startServer = (port: string | number): void => {
    connectDatabase()
    const app = initializeApp();

    app.get("/up", (req: Request, res: Response) =>
        res.send("Server is Up!"));

    app.listen(port);
    console.info("Listening @ PORT ", port);
}

/**
 * Defines the Port number to be used by the server
 */
const PORT = 4000;

/**
 * Instructs the server to check for the 'PORT' environment variable, and to use
 * that if available. (Used by Heroku and Docker instances)
 */
startServer(process.env.PORT || PORT);
