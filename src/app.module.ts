import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FeedbackAnalysisController } from './controllers/feedback-analysis.controller';
import { FeedbackAnalysisService } from './services/feedback-analysis.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
    ],
    controllers: [FeedbackAnalysisController],
    providers: [FeedbackAnalysisService],
})
export class AppModule {} 