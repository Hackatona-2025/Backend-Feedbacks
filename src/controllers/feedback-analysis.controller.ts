import { Controller, Post, Body } from '@nestjs/common';
import { FeedbackAnalysisService } from '../services/feedback-analysis.service';

@Controller('feedback-analysis')
export class FeedbackAnalysisController {
    constructor(private readonly feedbackAnalysisService: FeedbackAnalysisService) {}

    @Post('analisar')
    async analisarFeedbacks(
        @Body() body: { feedbacks: string[] }
    ): Promise<string> {
        return this.feedbackAnalysisService.analisarFeedbacks(body.feedbacks);
    }
} 