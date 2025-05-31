export interface FeedbackDto {
    id?: string;
    content: string;
    file?: string;
    createdAt?: Date;
    reportCount?: number;
    authorId: string;
    groupId?: string;
    isAnonymous: boolean;
    reactions?: string[]; // Replace 'string[]' with your Reaction type if available
}