import { createId } from "@paralleldrive/cuid2";


export enum ReactionType {
    THUMBS_UP = 'THUMBS_UP',
    THUMBS_DOWN = 'THUMBS_DOWN',
    LIGHT_BULB = 'LIGHT_BULB',
    SAD_FACE = 'SAD_FACE',
    THUNDER = 'THUNDER'
}

interface ReactionInterface {
    feedbackId: string;
    userId: string;
    type: ReactionType;
}

export class Reaction {
    id: string;
    feedbackId: string;
    userId: string;
    type: ReactionType;
    createdAt: Date;

    constructor(reaction: ReactionInterface, id?: string) {
        this.id = id || createId();
        this.feedbackId = reaction.feedbackId;
        this.userId = reaction.userId;
        this.type = reaction.type;
        this.createdAt = new Date();
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getFeedbackId(): string {
        return this.feedbackId;
    }

    public setFeedbackId(feedbackId: string): void {
        this.feedbackId = feedbackId;
    }

    public getUserId(): string {
        return this.userId;
    }

    public setUserId(userId: string): void {
        this.userId = userId;
    }

    public getType(): ReactionType {
        return this.type;
    }

    public setType(type: ReactionType): void {
        this.type = type;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }

    public toJson() {
        return {
            id: this.id,
            feedbackId: this.feedbackId,
            userId: this.userId,
            type: this.type,
            createdAt: this.createdAt
        };
    }
}