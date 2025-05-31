import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ReactionUseCase } from 'src/aplication/usecases/reactionUseCase'
import { ReactionDto } from 'src/aplication/dtos/reaction/reactionDto'
import { createReactionDto } from 'src/aplication/dtos/reaction/createReactionDto'


@Controller('reactions')
export class ReactionController {
    constructor(private readonly reactionUseCase: ReactionUseCase) {}

  @Post()
  async createReaction(@Body() reactionDto: createReactionDto ) {
    try {
      const reaction = await this.reactionUseCase.create(reactionDto)
      return { statusCode: 200, data: reaction }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const reaction = await this.reactionUseCase.findById(id)
      if (!reaction) {
        return { statusCode: 404, message: 'Reaction not found' }
      }
      return { statusCode: 200, data: reaction }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get('/all')
  async findAll() {
    try {
      const reactions = await this.reactionUseCase.findAll()
      return { statusCode: 200, data: reactions }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Patch()
  async updateReaction(@Body() reactionDto: ReactionDto) {
    try {
      const reaction = await this.reactionUseCase.update(reactionDto)
      return { statusCode: 200, data: reaction }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Delete(':id')
  async deleteReaction(@Param('id') id: string) {
    try {
      await this.reactionUseCase.delete(id)
      return { statusCode: 200, message: 'Reaction deleted successfully' }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get('/user/:userId')
  async findAllByUserId(@Param('userId') userId: string) {
    try {
      const reactions = await this.reactionUseCase.findByUserId(userId)
      return { statusCode: 200, data: reactions }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get('/feedback/:feedbackId')
  async findAllByFeedbackId(@Param('feedbackId') feedbackId: string) {
    try {
      const reactions = await this.reactionUseCase.findByFeedbackId(feedbackId)
      return { statusCode: 200, data: reactions }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

}