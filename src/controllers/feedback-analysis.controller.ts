import { Controller, Post, Body } from '@nestjs/common';
import { FeedbackAnalysisService } from '../services/feedback-analysis.service';

@Controller('api/user/feedback-analysis')
export class FeedbackAnalysisController {
    constructor(private readonly feedbackAnalysisService: FeedbackAnalysisService) {}

    @Post()
    async analisarFeedbacks(
        @Body() body: { feedbacks: string[] }
    ): Promise<string> {
        return this.feedbackAnalysisService.analisarFeedbacks(body.feedbacks);
    }
} 