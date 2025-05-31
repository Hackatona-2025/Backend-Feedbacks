import { Injectable } from '@nestjs/common';
import { Reaction } from '../entities/reaction';

@Injectable()
export abstract class ReactionRepository {
    abstract create(reaction: Reaction): Promise<Reaction>;
    abstract findById(id: string): Promise<Reaction | null>;
    abstract findAll(): Promise<Reaction[]>;
    abstract update(id: string, reaction: Partial<Reaction>): Promise<Reaction>;
    abstract delete(id: string): Promise<void>;
    abstract findByUserId(userId: string): Promise<Reaction[]>;
    abstract findByFeedbackId(feedbackId: string): Promise<Reaction[]>;
}
