import { PetPost } from "../../../data/postgres/models/pet-post.model";

export class UpdatePetPostService {
    async execute(petPostId: string, userData: any) {
        const petPost = await this.ensurePetPostExists(petPostId)

        petPost.pet_name = userData.pet_name;
        petPost.description = userData.description;
        petPost.owner = userData.owner;
        petPost.image_url = userData.image_url;
        petPost.hasFound= userData.hasFound;

        try {
            await petPost.save();
            return { message:"User Updated successfully" }
        } catch (error: any) {
            throw new Error(error)
        }

    }

    private async ensurePetPostExists(petPostId: string) {
        const petPost = await PetPost.findOne({
            select: ['id'],
            where: {
                id: petPostId,
            }
        })
        if(!petPost) {
            throw new Error(`Pet-post with ID: ${petPostId} wasn't found`)
        }

        return petPost;
    }
}