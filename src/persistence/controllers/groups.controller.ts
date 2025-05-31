import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { GroupUseCase } from 'src/aplication/usecases/groupUseCase'
import { createGroupDTO } from 'src/aplication/dtos/group/createGroupDTO'
import { GroupDTO } from 'src/aplication/dtos/group/groupDTO'


@Controller('groups')
export class GroupController {
    constructor(private readonly groupUseCase: GroupUseCase) {}

  @Post()
  async createGroup(@Body() createGroupDTO: createGroupDTO) {
    try {
      const group = await this.groupUseCase.createGroup(createGroupDTO)
      return { statusCode: 200, data: group }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const group = await this.groupUseCase.findById(id)
      if (!group) {
        return { statusCode: 404, message: 'Group not found' }
      }
      return { statusCode: 200, data: group }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get('/all')
  async findAll() {
    try {
      const groups = await this.groupUseCase.findAll()
      return { statusCode: 200, data: groups }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get('/parent/:parentId')
  async findAllByParentId(@Param('parentId') parentId: string) {
    try {
      const groups = await this.groupUseCase.findAllByParentId(parentId)
      return { statusCode: 200, data: groups }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Patch()
  async updateGroup(@Body() groupDTO: GroupDTO) {
    try {
      const group = await this.groupUseCase.update(groupDTO)
      return { statusCode: 200, data: group }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Delete(':id')
  async deleteGroup(@Param('id') id: string) {
    try {
      await this.groupUseCase.delete(id)
      return { statusCode: 200, message: 'Group deleted successfully' }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }



}