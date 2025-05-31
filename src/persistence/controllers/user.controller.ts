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
import { UserDTO } from 'src/aplication/dtos/user/userDTO'


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

  @Get('email/:email')
  async findByEmail(@Param('email') email: string) {
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

  @Post('/all')
  async findAll() {
    try {
      const users = await this.userUseCase.findAll()
      return { statusCode: 200, data: users }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Patch()
  async updateUser(@Body() usera: UserDTO) {
    try {
      const updatedUser = await this.userUseCase.update(usera)
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

  @Post('/login')
  async login(@Body() body: { email: string, password: string }) {
    try {
      const user = await this.userUseCase.login(body.email, body.password)
      return { statusCode: 200, data: user }
    } catch (error) {
      return { statusCode: 401, message: error.message }
    }
  }

}