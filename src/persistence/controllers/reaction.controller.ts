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
import { ReactionUseCase } from 'src/aplication/usecases/reactionUseCase'


@Controller('reactions')
export class ReactionController {
    constructor(private readonly reactionUseCase: ReactionUseCase) {}

    

}