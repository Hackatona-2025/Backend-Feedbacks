import { Reaction, ReactionType } from "src/domain/entities/reaction";
import { Reaction as PrismaReaction } from "@prisma/client";

export class ReactionMapper {
    static toDomain(prismaReaction: PrismaReaction) : Reaction {
        const retorno = new Reaction({
            feedbackId: prismaReaction.feedbackId,
            userId: prismaReaction.userId,
            type: prismaReaction.type as ReactionType
        }, prismaReaction.id);
        retorno.createdAt = prismaReaction.createdAt;
        return retorno;
    }

    static toPrisma(reaction: Reaction): PrismaReaction{
        return {
            id: reaction.id,
            feedbackId: reaction.getFeedbackId(),
            userId: reaction.getUserId(),
            type: reaction.getType(),
            createdAt: reaction.createdAt
        };
    }
}
