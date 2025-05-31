import { Injectable,Inject } from "@nestjs/common";
import { User, Role } from "src/domain/entities/user";
import { UserRepository } from "src/domain/repositories/user.repository";
import { CreateUserDTO } from "src/aplication/dtos/user/createUserDTO";
import { UserDTO } from "src/aplication/dtos/user/userDTO";



@Injectable()
export class UserUseCase {
    constructor(@Inject('UserRepository')
    private readonly userRepository: UserRepository) {}

    createUser(userDTO: CreateUserDTO): Promise<User> {
        const user = new User({
            name: userDTO.name,
            email: userDTO.email,
            password: userDTO.password,
            groupId: userDTO.groupId
        });
        return this.userRepository.create(user);
    }
    
    findById(id: string): Promise<User | null> {
        if (!id) {
            throw new Error("User ID is required");
        }
        return this.userRepository.findById(id);
    }

    findByEmail(email: string): Promise<User | null> {
        if (!email) {
            throw new Error("Email is required");
        }
        return this.userRepository.findByEmail(email);
    }

    findAll(): Promise<User[]> {

        return this.userRepository.findAll();
    }

    update(user: UserDTO): Promise<User>  {
        if (!user || !user.id) {
            throw new Error("User ID is required for update");
        }
        const userEntity = new User({
            name: user.name,
            email: user.email,
            password: user.password,
            groupId: user.groupId
        }, user.id);
        userEntity.description = user.description ?? "";
        userEntity.role = user.role ?? Role.USER;
        userEntity.coins = user.coins ?? 0;
        return this.userRepository.update(userEntity);
    }

    findByGroupId(groupId: string): Promise<User[]> {
        return this.userRepository.findByGroupId(groupId);
    }

    delete(id: string): Promise<void> {
        return this.userRepository.delete(id);
    }
    
    async login(email: string, password: string): Promise<User> {
        if (!email) {
            throw new Error("Email is required for login");
        }
        if(await this.userRepository.findByEmail(email)) {
            const user = await this.userRepository.findByEmail(email);
            if (user && user.password === password) {
                return user;
            } else {
                throw new Error("Invalid email or password");
            }
        }
        throw new Error("Invalid email or password");
    }
}
