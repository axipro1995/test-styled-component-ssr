import express, { Express } from "express";
import dotenv from "dotenv";
import ssrMiddleware from "./middleware";

dotenv.config();

const app: Express = express();
const Port = 3016;

async function start() {
	/*another async prepare here*/

	//handle GET
	app.get("/*", (req, resp) => ssrMiddleware(req, resp));

	app.listen(Port, () => {
		console.log(`Server is listening on port ${Port}`);
	});
}

start();
