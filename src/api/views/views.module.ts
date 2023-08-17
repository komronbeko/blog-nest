import { Module } from '@nestjs/common';
import { ViewsService } from './views.service';
import { ViewsController } from './views.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from 'src/infra/entities/posts.entity';
import { UsersEntity } from 'src/infra/entities/users.entity';
import { ViewsEntity } from 'src/infra/entities/views.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity, UsersEntity, ViewsEntity])],
  controllers: [ViewsController],
  providers: [ViewsService],
})
export class ViewsModule {}
