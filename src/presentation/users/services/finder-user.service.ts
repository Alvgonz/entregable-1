import { User } from "../../../data/postgres/models/user.model";


export class FinderUserService {
    constructor() {}

    async execute(userId: string) {
        const user = await User.findOne({
            select: ['id', 'name', 'email', 'role'],
            where: {
                id: userId,
                status: true,
            }
        })

        return user;
    }

}