import { User } from "../../../data/postgres/models/user.model"

export class DeleteUserService {
    constructor () {}

    async execute(userId: string) {
        const user = await this.ensureUserExist(userId);
        user.status = false;
        try {
            await user.save()
        } catch (error: any) {
            throw new Error(error);
        }
        
    }

    private async ensureUserExist(userId: string) {
        const user = await User.findOne({
            select: ['id'],
            where: {
                id: userId,
                status: true,
            }
        })
        
        if(!user) {
            throw new Error("User not found");
        }

        return user;
    }
}