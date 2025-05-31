import { Reaction, ReactionType } from "src/domain/entities/reaction";

export class ReactionMapper {
    static toDomain(prismaReaction: any): Reaction {
        return new Reaction({
            feedbackId: prismaReaction.feedbackId,
            userId: prismaReaction.userId,
            type: prismaReaction.type as ReactionType
        }, prismaReaction.id);
    }

    static toPrisma(reaction: Reaction): any {
        return {
            id: reaction.getId(),
            feedbackId: reaction.getFeedbackId(),
            userId: reaction.getUserId(),
            type: reaction.getType(),
            createdAt: reaction.getCreatedAt()
        };
    }
}
