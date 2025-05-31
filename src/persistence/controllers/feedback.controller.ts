import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { FeedbackUseCase } from 'src/aplication/usecases/feedbackUseCase'
import { createFeedbackDto } from 'src/aplication/dtos/feedback/createFeedbackDto'
import { FeedbackDto } from 'src/aplication/dtos/feedback/feedbackDto'


@Controller('feedbacks')
export class FeedbackController {
    constructor(private readonly feedbackUseCase: FeedbackUseCase) {}

  @Post()
  async createFeedback(@Body() feedbackDto: createFeedbackDto) {
    try {
      const feedback = await this.feedbackUseCase.createFeedback(feedbackDto)
      return { statusCode: 200, data: feedback }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const feedback = await this.feedbackUseCase.findById(id)
      if (!feedback) {
        return { statusCode: 404, message: 'Feedback not found' }
      }
      return { statusCode: 200, data: feedback }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Post('/all')
  async findAll() {
    try {
      const feedbacks = await this.feedbackUseCase.findAll()
      return { statusCode: 200, data: feedbacks }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Patch()
  async updateFeedback(@Body() feedbackDto: FeedbackDto) {
    try {
      const feedback = await this.feedbackUseCase.update(feedbackDto)
      return { statusCode: 200, data: feedback }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Delete(':id')
  async deleteFeedback(@Param('id') id: string) {
    try {
      await this.feedbackUseCase.delete(id)
      return { statusCode: 200, message: 'Feedback deleted successfully' }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get('/group/:groupId')
  async findByGroupId(@Param('groupId') groupId: string) {
    try {
      const feedbacks = await this.feedbackUseCase.findByGroupId(groupId)
      return { statusCode: 200, data: feedbacks }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get('/author/:authorId')
  async findByAuthorId(@Param('authorId') authorId: string) {
    try {
      const feedbacks = await this.feedbackUseCase.findByAuthorId(authorId)
      return { statusCode: 200, data: feedbacks }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }
}