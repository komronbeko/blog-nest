import { HttpException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsEntity } from 'src/infra/entities/posts.entity';
import { PostRepo } from 'src/infra/repositories/posts.repo';
import { UserRepo } from 'src/infra/repositories/users.repo';
import { UsersEntity } from 'src/infra/entities/users.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity) private readonly postsRepo: PostRepo,
    @InjectRepository(UsersEntity) private readonly usersRepo: UserRepo,
  ) {}
  async create(body: CreatePostDto) {
    const { description, photo, title, user_id } = body;

    const findUser = await this.usersRepo.findOneBy({ id: user_id });

    if (!findUser) throw new HttpException('User does not exist', 400);

    const newPost = await this.postsRepo.create({
      description,
      photo,
      title,
      user_id,
    });
    await this.postsRepo.save(newPost);

    return { message: 'success', data: newPost };
  }

  async findAll() {
    const posts = await this.postsRepo.find({
      relations: ['user'],
    });
    return { message: 'success', data: posts };
  }

  async findOne(id: number) {
    const findPost = await this.postsRepo.findOneBy({ id });

    if (!findPost) throw new HttpException('Post does not exist', 400);

    return { message: 'success', data: findPost };
  }

  async update(id: number, body: UpdatePostDto) {
    const { description, photo, title } = body;

    const findPost = await this.postsRepo.findOneBy({ id });

    if (!findPost) throw new HttpException('Post does not exist', 400);

    await this.postsRepo.update(id, {
      photo,
      title,
      description,
    });

    return { message: 'success' };
  }

  async remove(id: number) {
    const findPost = await this.postsRepo.findOneBy({ id });

    if (!findPost) throw new HttpException('Post does not exist', 400);

    await this.postsRepo.delete(id);

    return { message: 'success' };
  }
}
