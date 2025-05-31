import { Injectable } from "@nestjs/common";
import { Reaction } from "src/domain/entities/reaction";
import { ReactionRepository } from "src/domain/repositories/reaction.repository";
import { PrismaService } from "src/persistence/config/prisma-service";

@Injectable()
export class PrismaReactionRepository implements ReactionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(reaction: Reaction): Promise<Reaction> {
        // implementation here
        return {} as Reaction;
    }

    async findById(id: string): Promise<Reaction | null> {
        // implementation here
        return null;
    }

    async findAll(): Promise<Reaction[]> {
        // implementation here
        return [];
    }

    async update(id: string, reaction: Reaction): Promise<Reaction> {
        // implementation here
        return {} as Reaction;
    }

    async delete(id: string): Promise<void> {
        // implementation here
    }

    async findByFeedbackId(feedbackId: string): Promise<Reaction[]> {
        // implementation here
        return [];
    }

    async findByUserId(userId: string): Promise<Reaction[]> {
        // implementation here
        return [];
    }
}
