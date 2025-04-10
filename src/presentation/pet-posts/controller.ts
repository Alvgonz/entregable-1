import { Request, Response } from "express";
import { RegisterPetPostService } from "./services/register-pet-post.service";
import { FinderPetPostsService } from "./services/finder-pet-posts.service";
import { FinderPetPostService } from "./services/finder-pet-post.service";
import { DeletePetPostService } from "./services/delete-pet-post.service";
import { UpdatePetPostService } from "./services/update-pet-post.service";

export class PetPostController {
    constructor(
        private readonly registerPetPostService : RegisterPetPostService,
        private readonly finderPetPostsService : FinderPetPostsService,
        private readonly finderPetPostService : FinderPetPostService,
        private readonly deletePetPostService : DeletePetPostService,
        private readonly updatePetPostService : UpdatePetPostService,
    ) {}

    register = (req: Request, res: Response) => {
        this.registerPetPostService
            .execute(req.body)
            .then((result) => {
                res.status(200).json({ message: result })
            })
            .catch((error) => {
                res.status(500).json({ message: error })
            })
    }

    finderPetPosts = (req: Request, res: Response) => {
        this.finderPetPostsService
            .execute()
            .then((result) => {
                res.status(200).json({ message: result })
            })
            .catch((error) => {
                res.status(500).json({ message: error })
            })
    }

    finderPetPost = (req: Request, res: Response) => {
        const { id } = req.params
        this.finderPetPostService
            .execute(id)
            .then((result) => {
                res.status(200).json({ message: result })
            })
            .catch((error) =>{
                res.status(500).json({ message: error })
            })
    }

    delete = (req: Request, res: Response) => {
        const { id } = req.params
        this.deletePetPostService
            .execute(id)
            .then((result) => {
                res.status(204).json({ message: result })
            })
            .catch((error) => {
                res.status(500).json({ message: error })
            })
    }

    update = (req: Request, res: Response) => {
        const { id } = req.params
        this.updatePetPostService
            .execute(id, req.body)
            .then((result) => {
                res.status(200).json({ message: result })
            })
            .catch((error) => {
                res.status(500).json({ message: error })
            })
    }

}