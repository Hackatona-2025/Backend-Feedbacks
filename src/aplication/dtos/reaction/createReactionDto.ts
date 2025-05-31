import { ReactionType } from "src/domain/entities/reaction";

export interface createReactionDto {
    feedbackId: string;
    userId: string;
    type: ReactionType;
}