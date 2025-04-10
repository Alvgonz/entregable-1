import { PetPost } from "../../../data/postgres/models/pet-post.model";

export class DeletePetPostService {
    async execute(userId: string) {
        const petPost = await this.EnsurePetPostExists(userId);
        
        
        try {
            await PetPost.remove(petPost);
        } catch (error: any) {
            throw new Error(error)
        }
    }

    private async EnsurePetPostExists(userId: string) {
        const petPost = await PetPost.findOne({
            select: ['id'],
            where: {
                id: userId,
            }
        })

        if(!petPost) {
            throw new Error("User doesn't exist")
        }

        return petPost;
    }
}