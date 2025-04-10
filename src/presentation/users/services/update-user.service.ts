import { User } from "../../../data/postgres/models/user.model";

export class UpdateUserService {
    async execute(userId: string,userData: any) {
        const user = await this.EnsureUserExist(userId)

        user.name = userData.name;
        user.email = userData.email;

        try {
            await user.save();
            return { message:"User updated succesfully" }
        } catch (error: any) {
            throw new Error(error)
        }
    }

    private async EnsureUserExist(userId: string): Promise<User> {
        const user = await User.findOne({
            select:['id'],
            where: {
                id: userId,
                status: true,
            }
        });
        if(!user) {
            throw new Error(`User with ID: ${userId} was not found`)
        }

        return user
    }
}