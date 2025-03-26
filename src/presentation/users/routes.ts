import { Router } from "express";
import { RegisreUserService } from "./services/register-user.service";
import { FinderUserService } from "./services/finder-users.service";
import { UserController } from "./controller";

export class UserRoutes {
    static get routes(): Router {
        const router = Router()
        
        const registerUserService = new RegisreUserService;
        const finderUsersService = new FinderUserService;
        const controller = new UserController(
            registerUserService,
            finderUsersService
        )

        router.post('/register', controller.register);
        router.get('/',controller.finderUsers);
        
        return router;
    }
}