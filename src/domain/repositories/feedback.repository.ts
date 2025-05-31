import { Feedback } from '../entities/feedback'
import { Injectable } from '@nestjs/common'

@Injectable()
export abstract class FeedbackRepository {
    abstract create(feedback: Feedback): Promise<Feedback>
    abstract findById(id: string): Promise<Feedback | null>
    abstract findAll(): Promise<Feedback[]>
    abstract update(feedback: Feedback): Promise<Feedback>
    abstract delete(id: string): Promise<void>
    abstract findByGroupId(groupId: string): Promise<Feedback[]>
    abstract findByAuthorId(authorId: string): Promise<Feedback[]>
}