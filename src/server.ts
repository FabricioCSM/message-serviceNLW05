import {http} from "./http";  
import "./websocket/Client";
import "./websocket/Admin";

http.listen(3333, () => console.log('Server is running on port 3333'));


/**
 * GET = BUSCAS
 * POST = CRIAÇÃO
 * PUT = ALTERAÇÃO 
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMAÇÃO ESPECÍFICA 
 */