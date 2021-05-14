import { Router } from "express";
import { MessagesController } from "./controller/MessagesController";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messageController = new MessagesController();
 
routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUserName);
routes.put("/settings/:username", settingsController.update);


routes.post("/users", usersController.create);

routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.showByUser)

export {routes}

/**
 * Tipos de parâmetros
 * Routes Params => Parametros de rotas 
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * Body Params =>  {
 * 
 * }
 */