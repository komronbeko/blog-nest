import { HttpException, Injectable } from '@nestjs/common';
import { CreateViewDto } from './dto/create-view.dto';
import { ViewsEntity } from 'src/infra/entities/views.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/infra/entities/users.entity';
import { UserRepo } from 'src/infra/repositories/users.repo';
import { PostsEntity } from 'src/infra/entities/posts.entity';
import { PostRepo } from 'src/infra/repositories/posts.repo';
import { ViewRepo } from 'src/infra/repositories/views.repo';

@Injectable()
export class ViewsService {
  constructor(
    @InjectRepository(ViewsEntity)
    private readonly viewsRepo: ViewRepo,
    @InjectRepository(UsersEntity)
    private readonly usersRepo: UserRepo,
    @InjectRepository(PostsEntity)
    private readonly postsRepo: PostRepo,
  ) {}
  async addView(body: CreateViewDto) {
    const { post_id, user_id } = body;

    const findPost = await this.postsRepo.findOneBy({ id: post_id });
    const findUser = await this.usersRepo.findOneBy({ id: user_id });

    if (!findPost || !findUser)
      throw new HttpException('user_id or post_id does not', 400);

    const findView = await this.viewsRepo.findBy({ post_id, user_id });

    if (findView.length) {
      return { message: 'Already viewed' };
    }

    const newView = await this.viewsRepo.create({
      user_id,
      post_id,
    });
    await this.viewsRepo.save(newView);
    return { message: 'success', data: newView };
  }

  async findAll() {
    const data = await this.viewsRepo.find({ relations: ['user', 'post'] });
    return { message: 'success', data };
  }

  async getPostViews(id: number) {
    const findPost = await this.postsRepo.findOneBy({ id });

    if (!findPost) throw new HttpException('Post not found', 403);

    const postViews = await this.viewsRepo
      .createQueryBuilder('view')
      .leftJoinAndSelect('view.user', 'user')
      .leftJoinAndSelect('view.post', 'post')
      .where('view.id = :id', { id })
      .getMany();
    return { message: 'success', data: postViews };
  }
}
