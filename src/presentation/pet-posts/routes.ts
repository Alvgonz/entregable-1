import { Router } from "express";
import { RegisterPetPostService } from "./services/register-pet-post.service";
import { PetPostController } from "./controller";
import { FinderPetPostsService } from "./services/finder-pet-posts.service";
import { FinderPetPostService } from "./services/finder-pet-post.service";
import { DeletePetPostService } from "./services/delete-pet-post.service";
import { UpdatePetPostService } from "./services/update-pet-post.service";

export class PetPostsRoutes {
    static get routes(): Router {
        const router = Router()

        const registerPetPostService = new RegisterPetPostService;
        const finderPetPostsService = new FinderPetPostsService;
        const finderPetPostService = new FinderPetPostService;
        const deletePetPostService = new DeletePetPostService;
        const updatePetPostService = new UpdatePetPostService;
        const controller = new PetPostController(
            registerPetPostService,
            finderPetPostsService,
            finderPetPostService,
            deletePetPostService,
            updatePetPostService,
        )

        router.post('/register', controller.register);
        router.get('/',controller.finderPetPosts);
        router.get('/:id',controller.finderPetPost);
        router.delete('/:id',controller.delete);
        router.patch('/:id', controller.update);

        return router;
    }
}