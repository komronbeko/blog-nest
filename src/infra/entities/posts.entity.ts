/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UsersEntity } from './users.entity';
import { CommentsEntity } from './comments.entity';
import { ViewsEntity } from './views.entity';

@Entity({ name: 'posts' })
export class PostsEntity extends BaseEntity {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  user_id: number;

  @Column({ nullable: false })
  photo: string;

  @ManyToOne(() => UsersEntity, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity; 

  @OneToMany(() => CommentsEntity, (comment) => comment.post)
  comments: CommentsEntity[];

  @OneToMany(() => ViewsEntity, (view) => view.post)
  views: ViewsEntity[];
}
