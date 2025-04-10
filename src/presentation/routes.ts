import { Router } from "express"; 
import { UserRoutes } from "./users/routes";
import { PetPostsRoutes } from "./pet-posts/routes";

export class AppRoutes {
    static get routes(): Router {
        const  router = Router()

        router.use('/api/v1/users', UserRoutes.routes);
        router.use('/api/v1/pet-posts', PetPostsRoutes.routes);

        return router;
    }
}