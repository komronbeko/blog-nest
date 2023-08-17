/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PostsEntity } from './posts.entity';
import { UsersEntity } from './users.entity';

@Entity({ name: 'comments' })
export class CommentsEntity extends BaseEntity {
  @Column({ nullable: false })
  subject: string;

  @Column({ nullable: false })
  text: string;

  @Column({ nullable: false })
  user_id: number;

  @Column({ nullable: false })
  post_id: number;

  @ManyToOne(() => PostsEntity, (post) => post.comments)
  @JoinColumn({ name: 'post_id' })
  post: PostsEntity;

  @ManyToOne(() => UsersEntity, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;
}
