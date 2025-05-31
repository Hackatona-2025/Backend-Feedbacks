import { Injectable} from '@nestjs/common';
import { PrismaService } from 'src/persistence/config/prisma-service';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from 'src/domain/entities/user';


@Injectable()
export class PrismaUserRepository implements UserRepository  {
  constructor(private readonly prisma: PrismaService) {}

    async create(user: User): Promise<any> {
        return this.prisma.user.create({ data: user });
    }

    async findById(id: string): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { id } });
    }
z
    async findByEmail(email: string): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { email } });
    }

    async update(user: User): Promise<User> {
        return await this.prisma.user.update({
            where: { id: user.getId() },
            data: {
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                groupId: user.groupId,
                coins: user.coins,
                role: user.role,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({ where: { id } });
    }

    async findAll(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async findByGroupId(groupId: string): Promise<User[]> {
        return await this.prisma.user.findMany({ where: { groupId } });
    }

    async addCoins(userId: string, coins: number): Promise<User> {
        return await this.prisma.user.update({
            where: { id: userId },
            data: { coins: { increment: coins } },
        });
    }
    async removeCoins(userId: string, coins: number): Promise<User> {
        return await this.prisma.user.update({
            where: { id: userId },
            data: { coins: { decrement: coins } },
        });
    }

    

}