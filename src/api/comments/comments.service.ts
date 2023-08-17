import { HttpException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentsEntity } from 'src/infra/entities/comments.entity';
import { CommentRepo } from 'src/infra/repositories/comments.repo';
import { UsersEntity } from 'src/infra/entities/users.entity';
import { UserRepo } from 'src/infra/repositories/users.repo';
import { PostRepo } from 'src/infra/repositories/posts.repo';
import { PostsEntity } from 'src/infra/entities/posts.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsEntity)
    private readonly commentsRepo: CommentRepo,
    @InjectRepository(UsersEntity)
    private readonly usersRepo: UserRepo,
    @InjectRepository(PostsEntity)
    private readonly postsRepo: PostRepo,
  ) {}
  async create(body: CreateCommentDto) {
    const { text, post_id, subject, user_id } = body;

    const findPost = await this.postsRepo.findOneBy({ id: post_id });
    const findUser = await this.usersRepo.findOneBy({ id: user_id });

    if (!findPost || !findUser)
      throw new HttpException('user_id or post_id does not', 400);

    const newComment = await this.commentsRepo.create({
      subject,
      text,
      user_id,
      post_id,
    });
    await this.commentsRepo.save(newComment);

    return { message: 'success', newComment };
  }

  async findAll() {
    const data = await this.commentsRepo.find({ relations: ['user', 'post'] });
    return { message: 'success', data };
  }

  async findOne(id: number) {
    const findComment = await this.commentsRepo
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .leftJoinAndSelect('comment.post', 'post')
      .where('comment.id = :id', { id })
      .getOne();

    if (!findComment) throw new HttpException('Comment not found', 403);

    return { message: 'success', data: findComment };
  }

  async update(id: number, body: UpdateCommentDto) {
    const { subject, text } = body;

    const findComment = await this.commentsRepo.findOneBy({ id });

    if (!findComment) throw new HttpException('Comment not found', 403);

    await this.commentsRepo.update(id, { subject, text });

    return { message: 'success' };
  }

  async remove(id: number) {
    const findComment = await this.commentsRepo.findOneBy({ id });

    if (!findComment) throw new HttpException('Comment not found', 403);

    await this.commentsRepo.delete(id);

    return { message: 'success' };
  }
}
