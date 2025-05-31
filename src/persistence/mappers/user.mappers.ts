import { User, Role } from "src/domain/entities/user"
import { User as PrismaUser, Prisma} from "@prisma/client"


export class UserMapper {

    static toDomain(prismaUser: PrismaUser): User {
        const user = new User({
            name: prismaUser.name,
            email: prismaUser.email,
            password: prismaUser.password,
            groupId: prismaUser.groupId || "",
        }, prismaUser.id);
        user.setRole(prismaUser.role as Role);
        user.setCoins(prismaUser.coins);
        return user;
    }

    static toPrisma(user: User): Prisma.UserCreateInput {
        return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            description: user.getDescription(),
            coins: user.getCoins(),
        };
    }
}