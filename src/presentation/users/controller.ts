import { Request, Response } from "express";
import { RegisreUserService } from "./services/register-user.service";
import { FinderUserService } from "./services/finder-users.service";

export class UserController {
    constructor(
        private readonly registerUserService: RegisreUserService,
        private readonly finderUsersService: FinderUserService
    ) {}

    register = (req: Request, res: Response) => {
        this.registerUserService
            .execute()
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
}