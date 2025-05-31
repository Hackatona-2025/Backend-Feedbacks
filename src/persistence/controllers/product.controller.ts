import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ProductUseCase } from 'src/aplication/usecases/productUseCase'
import { createProductDto } from 'src/aplication/dtos/product/createProductDto'


@Controller('products')
export class ProductController {
    constructor(private readonly productUseCase: ProductUseCase) {}

  @Post()
  async createProduct(@Body() productDto: createProductDto) {
    try {
      const product = await this.productUseCase.createProduct(productDto)
      return { statusCode: 200, data: product }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const product = await this.productUseCase.getProductById(id)
      if (!product) {
        return { statusCode: 404, message: 'Product not found' }
      }
      return { statusCode: 200, data: product }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Post('/all')
  async findAll() {
    try {
      const products = await this.productUseCase.getAllProducts()
      return { statusCode: 200, data: products }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    try {
      await this.productUseCase.deleteProduct(id)
      return { statusCode: 200, message: 'Product deleted successfully' }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }

  @Patch(':id')
  async getProductByUserId(@Param('id') id: string) {
    try {
      const product = await this.productUseCase.getProductsByUserId(id)
      if (!product) {
        return { statusCode: 404, message: 'Product not found' }
      }
      return { statusCode: 200, data: product }
    } catch (error) {
      return { statusCode: 500, message: error.message }
    }
  }
  
}