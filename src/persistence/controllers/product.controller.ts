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
import { ProductUseCase } from 'src/aplication/usecases/productUseCase'


@Controller('products')
export class ProductController {
    constructor(private readonly productUseCase: ProductUseCase) {}

    

}