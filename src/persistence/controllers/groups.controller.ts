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
import { GroupUseCase } from 'src/aplication/usecases/groupUseCase'


@Controller('groups')
export class GroupController {
    constructor(private readonly groupUseCase: GroupUseCase) {}


}