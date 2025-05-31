import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { FeedbackUseCase } from 'src/aplication/usecases/feedbackUseCase'


@Controller('feedbacks')
export class FeedbackController {
    constructor(private readonly feedbackUseCase: FeedbackUseCase) {}


}