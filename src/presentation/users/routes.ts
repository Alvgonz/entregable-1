import { Router } from "express";
import { RegisterUserService } from "./services/register-user.service";
import { FinderUsersService } from "./services/finder-users.service";
import { UserController } from "./controller";
import { FinderUserService } from "./services/finder-user.service";
import { UpdateUserService } from "./services/update-user.service";
import { DeleteUserService } from "./services/delete-user.service";

export class UserRoutes {
    static get routes(): Router {
        const router = Router()
        
        const registerUserService = new RegisterUserService;
        const finderUsersService = new FinderUsersService;
        const finderUserService = new FinderUserService;
        const updateUserService = new UpdateUserService;
        const deleteUserService = new DeleteUserService;
        const controller = new UserController(
            registerUserService,
            finderUsersService,
            finderUserService,
            updateUserService,
            deleteUserService,
        )

        router.post('/register', controller.register);
        router.get('/',controller.finderUsers);
        router.get('/:id', controller.findUser);
        router.patch('/:id', controller.update);
        router.delete('/:id',controller.delete);

        return router;
    }
}