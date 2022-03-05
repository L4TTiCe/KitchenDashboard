import express, {Request, Response} from "express";

/**
 * Starts the Server and listens on the specified PORT
 * @param port {string | number} - the port the server will listen on
 */
const startServer = (port: string | number): void => {
    const app = express();

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
