import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupUseCase } from 'src/aplication/usecases/groupUseCase';
import { UserUseCase } from 'src/aplication/usecases/userUseCase';
import { FeedbackUseCase } from 'src/aplication/usecases/feedbackUseCase';
import { ReactionUseCase } from 'src/aplication/usecases/reactionUseCase';
import { ProductUseCase } from 'src/aplication/usecases/productUseCase';
import { PrismaService } from './prisma-service';
import { PrismaUserRepository } from 'src/persistence/repositories/user.repository.impl';
import { PrismaFeedbackRepository } from 'src/persistence/repositories/feedbacks.repository.impl';
import { PrismaReactionRepository } from 'src/persistence/repositories/reaction.repository.impl';
import { PrismaGroupRepository } from 'src/persistence/repositories/group.repository.impl';
import { PrismaProductRepository } from 'src/persistence/repositories/product.repository.impl';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, 
    FeedbackUseCase, 
    ReactionUseCase, 
    GroupUseCase, 
    UserUseCase, 
    ProductUseCase, 
    PrismaService,
  {
    provide: 'UserRepository',
    useClass: PrismaUserRepository,
  },
  {
    provide: 'FeedbackRepository',
    useClass: PrismaFeedbackRepository,
  },
  {
    provide: 'ReactionRepository',
    useClass: PrismaReactionRepository,
  },
  {
    provide: 'GroupRepository',
    useClass: PrismaGroupRepository,
  },
  {
    provide: 'ProductRepository',
    useClass: PrismaProductRepository,
  }


]
})
export class AppModule {}