/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PostsEntity } from './posts.entity';
import { UsersEntity } from './users.entity';

@Entity({ name: 'views' })
export class ViewsEntity extends BaseEntity {
  @Column({ nullable: false })
  user_id: number;

  @Column({ nullable: false })
  post_id: number;

  @ManyToOne(() => PostsEntity, (post) => post.views)
  @JoinColumn({ name: 'post_id' })
  post: PostsEntity;

  @ManyToOne(() => UsersEntity, (user) => user.views)
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;
}
