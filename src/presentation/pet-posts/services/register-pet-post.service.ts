import { PetPost } from "../../../data/postgres/models/pet-post.model";

export class RegisterPetPostService {

    async execute(userData: any) {
        const petPost = new PetPost;

        petPost.pet_name = userData.pet_name;
        petPost.description = userData.description;
        petPost.image_url = userData.image_url;
        petPost.owner = userData.owner;

        try {
            const createdPetPost = await petPost.save();
            return {
                message: "Pet-Post created successfully"
            }
        } catch (error: any) {
            throw new Error(error.message)
        }
    } 
}