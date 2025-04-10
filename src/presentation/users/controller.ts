import { Request, Response } from "express";
import { RegisterUserService } from "./services/register-user.service";
import { FinderUsersService } from "./services/finder-users.service";
import { FinderUserService } from "./services/finder-user.service";
import { UpdateUserService } from "./services/update-user.service";
import { DeleteUserService } from "./services/delete-user.service";

export class UserController {
    constructor(
        private readonly registerUserService: RegisterUserService,
        private readonly finderUsersService: FinderUsersService,
        private readonly finderUserService: FinderUserService,
        private readonly updateUserService: UpdateUserService,
        private readonly deleteUserService: DeleteUserService,
    ) {}

    register = (req: Request, res: Response) => {
        this.registerUserService
            .execute(req.body)
            .then((result) => {
                res.status(200).json({ message: result })
            })
            .catch((error) => {
                res.status(500).json({ message: error })
            })
    }

    finderUsers = (req: Request, res: Response) => {
        this.finderUsersService
            .execute()
            .then((result) =>{
                res.status(200).json({ message: result })
            })
            .catch((error) => {
                res.status(500).json({ message: error })
            })
    }

    findUser = (req: Request, res: Response) => {
        const { id } = req.params
        this.finderUserService
            .execute(id)
            .then((result) => {
                res.status(200).json({ message: result})
            })
            .catch((error) => {
                res.status(500).json({ message: error })
            })
    }

    update = (req: Request, res: Response) => {
        const { id } = req.body

        this.updateUserService
            .execute(id,req.body)
            .then((result) => {
                res.status(200).json({ message: result})
            })
            .catch((error) => {
                res.status(500).json({ message: error})
            })
    }

    delete = (req: Request, res: Response) =>  {
        const { id } = req.body;
        this.deleteUserService
        .execute(id)
        .then((result) => {
            res.status(204).json({ message: result })
        })
        .catch((error) => {
            res.status(500).json({ message: error })
        })

    }


}