import { PetPost } from "../../../data/postgres/models/pet-post.model";

export class FinderPetPostService {
    constructor() {}

    async execute(petPostId: string) {
        const petPost = await PetPost.findOne({
            select: ['id','pet_name','description','owner','status'],
            where: {
                id: petPostId,
            }
        })

        return petPost;
    }
}