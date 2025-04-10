import { User } from "../../../data/postgres/models/user.model";

export class RegisterUserService {

    async execute(userData: any) {
        const user = new User;

        user.name = userData.name;
        user.email = userData.name;
        user.password = userData.password;

        try {
            const userCreated = await user.save();
            return {
                message: "User created succesfully"
            }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}