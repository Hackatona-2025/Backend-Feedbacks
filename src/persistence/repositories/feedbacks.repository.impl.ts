import { Injectable } from "@nestjs/common";
import { Feedback } from "src/domain/entities/feedback";
import { FeedbackRepository } from "src/domain/repositories/feedback.repository";
import { PrismaService } from "src/persistence/config/prisma-service";
import { FeedbackMapper } from "src/persistence/mappers/feedback.mapper";

@Injectable()
export class PrismaFeedbackRepository implements FeedbackRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(feedback: Feedback): Promise<Feedback> {
        const prismaFeedback = FeedbackMapper.toPrisma(feedback);
        const createdFeedback = await this.prisma.feedback.create({
            data: prismaFeedback,
        });
        return FeedbackMapper.toDomain(createdFeedback);
    }

    async findById(id: string): Promise<Feedback | null> {
        const feedback = await this.prisma.feedback.findUnique({
            where: { id },
        });
        if (!feedback) {
            return null;
        }
        return FeedbackMapper.toDomain(feedback);
    }

    async findAll(): Promise<Feedback[]> {
        const feedbacks = await this.prisma.feedback.findMany();
        return feedbacks.map(feedback => FeedbackMapper.toDomain(feedback));
    }

    async update(feedback: Feedback): Promise<Feedback> {
        const prismaFeedback = FeedbackMapper.toPrisma(feedback);
        const updatedFeedback = await this.prisma.feedback.update({
            where: { id: feedback.getId() },
            data: prismaFeedback,
        });
        return FeedbackMapper.toDomain(updatedFeedback);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.feedback.delete({
            where: { id },
        });
    }

    async findByGroupId(groupId: string): Promise<Feedback[]> {
        const feedbacks = await this.prisma.feedback.findMany({
            where: { groupId },
        });
        return feedbacks.map(feedback => FeedbackMapper.toDomain(feedback));
    }

    async findByAuthorId(authorId: string): Promise<Feedback[]> {
        const feedbacks = await this.prisma.feedback.findMany({
            where: { authorId },
        });
        return feedbacks.map(feedback => FeedbackMapper.toDomain(feedback));
    }
}
