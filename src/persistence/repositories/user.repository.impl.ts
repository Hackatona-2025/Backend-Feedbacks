import { Injectable} from '@nestjs/common';
import { PrismaService } from 'src/persistence/config/prisma-service';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from 'src/domain/entities/user';
import { UserMapper } from 'src/persistence/mappers/user.mappers';
// @ts-nocheck

@Injectable()
export class PrismaUserRepository implements UserRepository{
  constructor(private readonly prisma: PrismaService) {}

    async create(user: User): Promise<any> {
        const prismaUser = UserMapper.toPrisma(user);
        const createdUser = await this.prisma.user.create({
            data: prismaUser,
        });
        return UserMapper.toDomain(createdUser);
    }

    async findById(id: string): Promise<User | null> {
        const prismaUser = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!prismaUser) {
            return null;
        }
        return UserMapper.toDomain(prismaUser);
    }
z
    async findByEmail(email: string): Promise<User | null> {
        const prismaUser = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!prismaUser) {
            return null;
        }
        return UserMapper.toDomain(prismaUser);
    }

    async update(user: User): Promise<User> {
        const prismaUser = UserMapper.toPrisma(user);
        const updatedUser = await this.prisma.user.update({
            where: { id: user.getId() },
            data: prismaUser,
        });
        return UserMapper.toDomain(updatedUser);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: { id },
        });
        return;
    }

    async findAll(): Promise<User[]> {
        const prismaUsers = await this.prisma.user.findMany();
        return prismaUsers.map(user => UserMapper.toDomain(user));
    }

    async findByGroupId(groupId: string): Promise<User[]> {
        const prismaUsers = await this.prisma.user.findMany({
            where: { groupId },
        });
        return prismaUsers.map(user => UserMapper.toDomain(user));
    }
    
    async addCoins(userId: string, coins: number): Promise<User> {
        const user = await this.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        user.setCoins(user.getCoins() + coins);
        return this.update(user);
    }

    async removeCoins(userId: string, coins: number): Promise<User> {
        const user = await this.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        const newCoins = user.getCoins() - coins;
        if (newCoins < 0) {
            throw new Error('Insufficient coins');
        }
        user.setCoins(newCoins);
        return this.update(user);
    }

}