/* Criação de todas as rotas */
import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureEmployer } from "./middlewares/ensureEmployer";
import { ensureWorker } from "./middlewares/ensureWorker";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListJobsController } from "./controllers/ListJobsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { CreateJobController } from "./controllers/CreateJobController";
const router = Router();

const createJobController = new CreateJobController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const listJobsController = new ListJobsController();

/* Rota para o cadastro das tags com o middleware ensureAdmin entre o path da rota e a função */
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
/* Ambas as rotas podem possuir o mesmo nome, pois os tipos de métodos são distintos */
router.get("/tags", ensureAuthenticated, listTagsController.handle);

/* Rota do usuário para inserir um usuário na aplicação */
router.post("/users", createUserController.handle);

/* Rota responsável por fazer o login do usuário */
router.post("/login", authenticateUserController.handle);

/* Rota para salvar o compliment */
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

/* Rota para buscar a listagem de elogios enviados */
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);

/* Rota para buscar a listagem de elogios recebidos */
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);

/* Rota para buscar a listagem dos usuarios */
router.get("/users/", ensureAuthenticated, listUsersController.handle);

/* Rota do empregador para inserir um trabalho novo na aplicação */
router.post("/jobs", ensureEmployer, createJobController.handle);

/* Rota do empregador para buscar a listagem de trabalhos */
router.get("/jobs/", ensureWorker, listJobsController.handle);

export { router };