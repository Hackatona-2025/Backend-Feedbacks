import { Injectable } from "@nestjs/common";
import { Reaction } from "src/domain/entities/reaction";
import { ReactionRepository } from "src/domain/repositories/reaction.repository";
import { PrismaService } from "src/persistence/config/prisma-service";
import { ReactionMapper } from "../mappers/reaction.mapper";

@Injectable()
export class PrismaReactionRepository implements ReactionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(reaction: Reaction): Promise<Reaction> {
        const prismaReaction = ReactionMapper.toPrisma(reaction);
        const createdReaction = await this.prisma.reaction.create({
            data: prismaReaction,
        });
        return ReactionMapper.toDomain(createdReaction);
    }

    async findById(id: string): Promise<Reaction | null> {
        const reaction = await this.prisma.reaction.findUnique({
            where: { id },
        });
        if (!reaction) {
            return null;
        }
        return ReactionMapper.toDomain(reaction);
    }

    async findAll(): Promise<Reaction[]> {
        const reactions = await this.prisma.reaction.findMany();
        return reactions.map(reaction => ReactionMapper.toDomain(reaction));
    }

    async update(id: string, reaction: Reaction): Promise<Reaction> {
        const prismaReaction = ReactionMapper.toPrisma(reaction);
        const updatedReaction = await this.prisma.reaction.update({
            where: { id },
            data: prismaReaction,
        });
        return ReactionMapper.toDomain(updatedReaction);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.reaction.delete({
            where: { id },
        });
    }

    async findByFeedbackId(feedbackId: string): Promise<Reaction[]> {
        const reactions = await this.prisma.reaction.findMany({
            where: { feedbackId },
        });
        return reactions.map(reaction => ReactionMapper.toDomain(reaction));
    }

    async findByUserId(userId: string): Promise<Reaction[]> {
        const reactions = await this.prisma.reaction.findMany({
            where: { userId },
        });
        return reactions.map(reaction => ReactionMapper.toDomain(reaction));
    }
}
