/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PostsEntity } from './posts.entity';
import { CommentsEntity } from './comments.entity';
import { ViewsEntity } from './views.entity';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  photo: string;

  @OneToMany(() => PostsEntity, (post) => post.user)
  posts: PostsEntity[];

  @OneToMany(() => CommentsEntity, (comment)=> comment.user)
  comments: CommentsEntity[]

  @OneToMany(() => ViewsEntity, (view)=> view.user)
  views: ViewsEntity[]
}
 