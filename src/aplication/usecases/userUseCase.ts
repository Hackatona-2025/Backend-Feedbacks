import { Injectable } from "@nestjs/common";
import { User } from "src/domain/entities/user";
import { UserRepository } from "src/domain/repositories/user.repository";
import { CreateUserDTO } from "src/aplication/dtos/user/createUserDTO";



@Injectable()
export class UserUseCase {
    constructor(private readonly userRepository: UserRepository) {}
    createUser(user: CreateUserDTO): Promise<User> {
        
    }
    
    findById(id: string): Promise<User | null> {
        // implementation here
    }

    findByEmail(email: string): Promise<User | null> {
        // implementation here
    }

    findAll(): Promise<User[]> {
        // implementation here
    }

    update(user: CreateUserDTO): Promise<User>  {
        // implementation here
    }

    findByGroupId(groupId: string): Promise<User[]> {
        // implementation here
    }

    delete(id: string): Promise<void> {
        // implementation here
    }
    
}
