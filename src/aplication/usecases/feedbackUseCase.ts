import { Injectable } from "@nestjs/common";
import { Feedback } from "../../domain/entities/feedback";
import { FeedbackRepository } from "src/domain/repositories/feedback.repository";
import { createFeedbackDto } from "src/aplication/dtos/feedback/createFeedbackDto";
import { FeedbackDto } from "src/aplication/dtos/feedback/feedbackDto";
import { Inject } from "@nestjs/common/decorators";

@Injectable()   
export class FeedbackUseCase {
    constructor(
        @Inject ('FeedbackRepository')
        private readonly feedbackRepository: FeedbackRepository) {}

    async createFeedback(dto: createFeedbackDto): Promise<Feedback> {
        const feedback = new Feedback({
            content: dto.content,
            file: dto.file,
            authorId: dto.authorId,
            groupId: dto.groupId,
            isAnonymous: dto.isAnonymous,
        });
        return await this.feedbackRepository.create(feedback);
    }

    async findAll(): Promise<Feedback[]> {
        return await this.feedbackRepository.findAll();
    }

    async findById(id: string): Promise<Feedback | null> {
        if (!id) {
            throw new Error("Feedback ID is required");
        }
        return await this.feedbackRepository.findById(id);
    }

    async update(feedback: FeedbackDto): Promise<Feedback> {
        if (!feedback.id) {
            throw new Error("Feedback ID is required for update");
        }
        const feedbackEntity = new Feedback({
            content: feedback.content,
            file: feedback.file,
            authorId: feedback.authorId,
            groupId: feedback.groupId,
            isAnonymous: feedback.isAnonymous,
        }, feedback.id);
        feedbackEntity.createdAt = feedback.createdAt ?? new Date();
        feedbackEntity.reportCount = feedback.reportCount ?? 0;
        feedbackEntity.reactions = feedback.reactions ?? [];
        return await this.feedbackRepository.update(feedbackEntity);
    }

    async delete(id: string): Promise<void> {
        if (!id) {
            throw new Error("Feedback ID is required for deletion");
        }
        return await this.feedbackRepository.delete(id);
    }

    async findByGroupId(groupId: string): Promise<Feedback[]> {
        if (!groupId) {
            throw new Error("Group ID is required");
        }
        return await this.feedbackRepository.findByGroupId(groupId);
    }

    async findByAuthorId(authorId: string): Promise<Feedback[]> {
        if (!authorId) {
            throw new Error("Author ID is required");
        }
        return await this.feedbackRepository.findByAuthorId(authorId);
    }

}