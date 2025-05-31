import { Injectable } from "@nestjs/common";
import { Feedback } from "src/domain/entities/feedback";
import { FeedbackRepository } from "src/domain/repositories/feedback.repository";
import { PrismaService } from "src/persistence/config/prisma-service";

@Injectable()
export class PrismaFeedbackRepository implements FeedbackRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(feedback: Feedback): Promise<Feedback> {
        // implementation here
        return {} as Feedback;
    }

    async findById(id: string): Promise<Feedback | null> {
        // implementation here
        return null;
    }

    async findAll(): Promise<Feedback[]> {
        // implementation here
        return [];
    }

    async update(feedback: Feedback): Promise<Feedback> {
        // implementation here
        return {} as Feedback;
    }

    async delete(id: string): Promise<void> {
        // implementation here
    }

    async findByGroupId(groupId: string): Promise<Feedback[]> {
        // implementation here
        return [];
    }

    async findByAuthorId(authorId: string): Promise<Feedback[]> {
        // implementation here
        return [];
    }
}
