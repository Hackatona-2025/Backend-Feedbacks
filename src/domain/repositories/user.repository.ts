import { User } from '../entities/user'
import { Injectable } from '@nestjs/common'

@Injectable()
export abstract class UserRepository {
    abstract create(user: User): Promise<User>
    abstract findById(id: string): Promise<User | null>
    abstract findByEmail(email: string): Promise<User | null>
    abstract findAll(): Promise<User[]>
    abstract update(user: User): Promise<User>
    abstract findByGroupId(groupId: string): Promise<User[]>
    abstract delete(id: string): Promise<void>
    abstract addCoins(userId: string, coins: number): Promise<User>
    abstract removeCoins(userId: string, coins: number): Promise<User>
}