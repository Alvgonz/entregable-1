import { PetPost } from "../../../data/postgres/models/pet-post.model"

export class FinderPetPostsService {

    async execute() {
        try {
            return await PetPost.find({
                select: ['id','pet_name','description','image_url','owner','status'],
                
            })
        } catch (error: any) {
            throw new Error(error)
        }
    }
}