import { Feedback } from "src/domain/entities/feedback";
import { Feedback as PrismaFeedback} from "@prisma/client";


export class FeedbackMapper {
    static toDomain(feedback: PrismaFeedback): Feedback {
        const mapper = new Feedback({
            content: feedback.content,
            file: feedback.file || undefined,
            authorId: feedback.authorId,
            groupId: feedback.groupId || undefined,
            isAnonymous: feedback.isAnonymous,
        }, feedback.id)
        mapper.setCreatedAt(feedback.createdAt);
        mapper.reportCount = feedback.reportCount;
        return mapper;
    }

    static toPrisma(feedback: Feedback): PrismaFeedback {
        return {
            id: feedback.getId(),
            content: feedback.getContent(),
            file: feedback.getFile() || null,
            createdAt: feedback.getCreatedAt(),
            reportCount: feedback.getReportCount(),
            authorId: feedback.getAuthorId(),
            recepentId: feedback.recepentId || null,
            groupId: feedback.getGroupId() || null,
            isAnonymous: feedback.isAnonymous,
        };
    }
}