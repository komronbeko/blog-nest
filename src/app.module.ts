import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './api/auth/auth.module';
import { FileModule } from './api/file/file.module';
import { PostsModule } from './api/posts/posts.module';
import { CommentsModule } from './api/comments/comments.module';
import { ViewsModule } from './api/views/views.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:olimov0825@localhost:5432/blog',
      logging: false,
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    FileModule,
    PostsModule,
    CommentsModule,
    ViewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
