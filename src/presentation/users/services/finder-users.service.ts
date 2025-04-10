import { User } from "../../../data/postgres/models/user.model";

export class FinderUsersService {

    async execute() {
        try {
            return await User.find({
                select: ['id','name','email','role'],
                where: {
                    status: true,
                }
            })
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}