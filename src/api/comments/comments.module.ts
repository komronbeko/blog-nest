import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsEntity } from 'src/infra/entities/comments.entity';
import { UsersEntity } from 'src/infra/entities/users.entity';
import { PostsEntity } from 'src/infra/entities/posts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentsEntity, UsersEntity, PostsEntity]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
