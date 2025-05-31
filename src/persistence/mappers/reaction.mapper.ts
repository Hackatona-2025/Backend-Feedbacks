import { Prisma } from "generated/prisma";
import { Reaction, ReactionType } from "src/domain/entities/reaction";

export class ReactionMapper {
    static toDomain(prismaReaction: any): Reaction {
        return new Reaction({
            feedbackId: prismaReaction.feedbackId,
            userId: prismaReaction.userId,
            type: prismaReaction.type as ReactionType
        }, prismaReaction.id).createdAt = prismaReaction.createdAt;
    }

    static toPrisma(reaction: Reaction): Prisma.ReactionCreateInput {
        return {
            type: reaction.getType(),
            createdAt: reaction.getCreatedAt(),
            feedback: { connect: { id: reaction.feedbackId } },
            user: { connect: { id: reaction.userId } },
        };
    }
}
