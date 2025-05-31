import { Controller, Post, Body } from '@nestjs/common';
import { FeedbackAnalysisService } from '../services/feedback-analysis.service';

@Controller('api/user/feedback-analysis')
export class FeedbackAnalysisController {
    constructor(private readonly feedbackAnalysisService: FeedbackAnalysisService) {}

    @Post()
    async analisarFeedbacks(
        @Body() body: { feedbacks: string[] },
    ): Promise<string> {
      const cleanJson = (await this.feedbackAnalysisService.analisarFeedbacks(body.feedbacks)).replace(/^```[\s\S]*?\n/, '').replace(/\n```$/, '');
      console.log(cleanJson);
      return JSON.parse(cleanJson);
    }
} 