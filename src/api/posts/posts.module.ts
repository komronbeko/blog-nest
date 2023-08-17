import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from 'src/infra/entities/posts.entity';
import { UsersEntity } from 'src/infra/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity, UsersEntity])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
