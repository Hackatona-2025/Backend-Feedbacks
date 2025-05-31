import { createId } from "@paralleldrive/cuid2";
import { User } from './user';
import { Feedback } from './feedback';

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

    getId(): string {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getFeedbackId(): string {
        return this.feedbackId;
    }

    setFeedbackId(feedbackId: string): void {
        this.feedbackId = feedbackId;
    }

    getUserId(): string {
        return this.userId;
    }

    setUserId(userId: string): void {
        this.userId = userId;
    }

    getType(): ReactionType {
        return this.type;
    }

    setType(type: ReactionType): void {
        this.type = type;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }

    setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }

    toJson() {
        return {
            id: this.id,
            feedbackId: this.feedbackId,
            userId: this.userId,
            type: this.type,
            createdAt: this.createdAt
        };
    }
}