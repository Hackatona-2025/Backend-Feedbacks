export interface createFeedbackDto{
    content: string;
    file?: string;
    authorId: string;
    groupId?: string;
    isAnonymous: boolean;
}