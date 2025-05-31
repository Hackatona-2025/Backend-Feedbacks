import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { UserUseCase } from 'src/aplication/usecases/userUseCase'
import { CreateUserDTO } from 'src/aplication/dtos/user/createUserDTO'
import { User } from 'src/domain/entities/user'


@Controller('users')
export class UserController {
    constructor(private readonly userUseCase: UserUseCase) {}

    
  @Post()
  async createUser(@Body() userDTO :CreateUserDTO) {
    try{
      const user = await this.userUseCase.createUser(userDTO)
      return { statusCode: 200, data: user }
    }
    catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const user = await this.userUseCase.findById(id)
      if (!user) {
        return { statusCode: 404, message: 'User not found' }
      }
      return { statusCode: 200, data: user }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Post('/email')
  async findByEmail(@Body('email') email: string) {
    try {
      const user = await this.userUseCase.findByEmail(email)
      if (!user) {
        return { statusCode: 404, message: 'User not found' }
      }
      return { statusCode: 200, data: user }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get('/all')
  async findAll() {
    try {
      const users = await this.userUseCase.findAll()
      return { statusCode: 200, data: users }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Patch()
  async updateUser(@Body() userDTO: User) {
    try {
      const updatedUser = await this.userUseCase.update(userDTO)
      return { statusCode: 200, data: updatedUser }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get('/group/:groupId')
  async findByGroupId(@Param('groupId') groupId: string) {
    try {
      const users = await this.userUseCase.findByGroupId(groupId)
      return { statusCode: 200, data: users }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    try {
      await this.userUseCase.delete(id)
      return { statusCode: 200, message: 'User deleted successfully' }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

}