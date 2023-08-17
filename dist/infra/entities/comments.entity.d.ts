import { BaseEntity } from './base.entity';
import { PostsEntity } from './posts.entity';
import { UsersEntity } from './users.entity';
export declare class CommentsEntity extends BaseEntity {
    subject: string;
    text: string;
    user_id: number;
    post_id: number;
    post: PostsEntity;
    user: UsersEntity;
}
