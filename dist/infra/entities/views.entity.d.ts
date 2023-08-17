import { BaseEntity } from './base.entity';
import { PostsEntity } from './posts.entity';
import { UsersEntity } from './users.entity';
export declare class ViewsEntity extends BaseEntity {
    user_id: number;
    post_id: number;
    post: PostsEntity;
    user: UsersEntity;
}
