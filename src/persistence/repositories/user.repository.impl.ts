import { Injectable} from '@nestjs/common';
import { PrismaService } from 'src/persistence/config/prisma-service';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from 'src/domain/entities/user';
// @ts-nocheck

@Injectable()
export class PrismaUserRepository implements UserRepository{
  constructor(private readonly prisma: PrismaService) {}

    async create(user: User): Promise<any> {
        return this.prisma.user.create({ data: user });
    }

    async findById(id: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            return null;
        }
        const mapper = new User({
            name: user.name,
            email: user.email,
            password: user.password,
            groupId: user.groupId,}, user.id);
        mapper.coins = user.coins;
        mapper.role = user.role as unknown as import('src/domain/entities/user').Role;
        return mapper;
        
    }
z
    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            return null;
        }
        const mapper = new User({
            name: user.name,
            email: user.email,
            password: user.password,
            groupId: user.groupId,}, user.id);
        mapper.coins = user.coins;
        mapper.role = user.role as unknown as import('src/domain/entities/user').Role;
        return mapper;
    }

    async update(user: User): Promise<User> {
        await this.prisma.user.update({
            where: { id: user.getId() },
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                groupId: user.groupId,
                coins: user.coins,
                role: user.role,
            },
        });
        return user;
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({ where: { id } });
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users.map(user => {
            const mapper = new User({
            name: user.name,
            email: user.email,
            password: user.password,
            groupId: user.groupId,
            }, user.id);
            mapper.coins = user.coins;
            mapper.role = user.role as unknown as import('src/domain/entities/user').Role;
            return mapper;
        });
    }

    async findByGroupId(groupId: string): Promise<User[]> {
        const users = await this.prisma.user.findMany({ where: { groupId } });
        return users.map(user => {
            const mapper = new User({
            name: user.name,
            email: user.email,
            password: user.password,
            groupId: user.groupId,
            }, user.id);
            mapper.coins = user.coins;
            mapper.role = user.role as unknown as import('src/domain/entities/user').Role;
            return mapper;
        });
    }
    
    async addCoins(userId: string, coins: number): Promise<User> {
        const user = await this.prisma.user.update({ 
            where: { id: userId },
            data: { coins: { increment: coins } },
        });
        const mapper = new User({
            name: user.name,
            email: user.email,
            password: user.password,
            groupId: user.groupId,
        }, user.id);
        mapper.coins = user.coins;
        mapper.role = user.role as unknown as import('src/domain/entities/user').Role;
        return mapper;
    }

    async removeCoins(userId: string, coins: number): Promise<User> {
        const user = await this.prisma.user.update({
            where: { id: userId },
            data: { coins: { decrement: coins } },
        });
        const mapper = new User({
            name: user.name,
            email: user.email,
            password: user.password,
            groupId: user.groupId,
        }, user.id);
        mapper.coins = user.coins;
        mapper.role = user.role as unknown as import('src/domain/entities/user').Role;
        return mapper;
    }

}