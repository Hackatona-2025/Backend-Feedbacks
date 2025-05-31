import { Injectable } from "@nestjs/common";
import { Reaction } from "src/domain/entities/reaction";
import { ReactionRepository } from "src/domain/repositories/reaction.repository";
import { PrismaService } from "src/persistence/config/prisma-service";
import { ReactionMapper } from "../mappers/reaction.mapper";

@Injectable()
export class PrismaReactionRepository implements ReactionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(reaction: Reaction): Promise<Reaction> {
        return await this.prisma.reaction.create({
            data: ReactionMapper.toPrisma(reaction),
        });
    }

    async findById(id: string): Promise<Reaction | null> {
        return await this.prisma.reaction.findUnique({
            where: { id },
        });
    }

    async findAll(): Promise<Reaction[]> {
        return await this.prisma.reaction.findMany();
    }

    async update(id: string, reaction: Reaction): Promise<Reaction> {
        return await this.prisma.reaction.update({
            where: { id },
            data: ReactionMapper.toPrisma(reaction),
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.reaction.delete({
            where: { id },
        });
    }

    async findByFeedbackId(feedbackId: string): Promise<Reaction[]> { 
        return await this.prisma.reaction.findMany({
            where: { feedbackId },
        });
    }

    async findByUserId(userId: string): Promise<Reaction[]> {
        return await this.prisma.reaction.findMany({
            where: { userId },
        });
    }
}
