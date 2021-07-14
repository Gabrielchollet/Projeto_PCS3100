/* Criação de todas as rotas */
import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureEmployer } from "./middlewares/ensureEmployer";
import { ensureWorker } from "./middlewares/ensureWorker";
import { ListJobsController } from "./controllers/ListJobsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { CreateJobController } from "./controllers/CreateJobController";
import { AcceptJobController } from "./controllers/AcceptJobController";

const router = Router();

const createJobController = new CreateJobController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUsersController = new ListUsersController();
const listJobsController = new ListJobsController();
const acceptJobController = new AcceptJobController();


/* Rota do usuário para inserir um usuário na aplicação */
router.post("/users", createUserController.handle);

/* Rota responsável por fazer o login do usuário */
router.post("/login", authenticateUserController.handle);

/* Rota para buscar a listagem dos usuarios */
router.get("/users/", ensureAuthenticated, listUsersController.handle);

/* Rota do empregador para inserir um trabalho novo na aplicação */
router.post("/jobs", ensureAuthenticated, ensureEmployer, createJobController.handle);

/* Rota do empregado para buscar a listagem de trabalhos */
router.get("/jobs/", ensureAuthenticated, ensureWorker, listJobsController.handle);

/* Rota para aceitar um emprego */
router.put("/jobs/acceptjobs", ensureAuthenticated, ensureWorker, acceptJobController.handle);

export { router };