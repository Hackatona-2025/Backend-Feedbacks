import { Injectable, Inject} from "@nestjs/common";
import { Reaction, } from "../../domain/entities/reaction";
import { ReactionRepository } from "src/domain/repositories/reaction.repository";
import { createReactionDto } from "src/aplication/dtos/reaction/createReactionDto";
import { ReactionDto } from "src/aplication/dtos/reaction/reactionDto";

@Injectable()   
export class ReactionUseCase {
    constructor(@Inject('ReactionRepository')
        private readonly reactionRepository: ReactionRepository) {}

    async create(dto: createReactionDto): Promise<Reaction> {
        const reaction = new Reaction({
            feedbackId: dto.feedbackId,
            userId: dto.userId,
            type: dto.type,
        });
        
        return await this.reactionRepository.create(reaction);
    }

    async findAll(): Promise<Reaction[]> {
        return await this.reactionRepository.findAll();
    }

    async findById(id: string): Promise<Reaction | null> {
        if (!id) {
            throw new Error("Reaction ID is required");
        }
        return await this.reactionRepository.findById(id);
    }

    async update(reaction: ReactionDto): Promise<Reaction> {
        if (!reaction.id) {
            throw new Error("Reaction ID is required for update");
        }
        const reactionEntity = new Reaction({
            feedbackId: reaction.feedbackId,
            userId: reaction.userId,
            type: reaction.type,
        }, reaction.id);
        reactionEntity.createdAt = reaction.createdAt ?? new Date();
        return await this.reactionRepository.update(reactionEntity.id, reactionEntity);
    }

    async delete(id: string): Promise<void> {
        if (!id) {
            throw new Error("Reaction ID is required for deletion");
        }
        return await this.reactionRepository.delete(id);
    }

    async findByUserId(userId: string): Promise<Reaction[]> {
        if (!userId) {
            throw new Error("User ID is required");
        }
        return await this.reactionRepository.findByUserId(userId);
    }

    async findByFeedbackId(feedbackId: string): Promise<Reaction[]> {
        if (!feedbackId) {
            throw new Error("Feedback ID is required");
        }
        return await this.reactionRepository.findByFeedbackId(feedbackId);
    }

}