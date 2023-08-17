import { BaseEntity } from './base.entity';
import { UsersEntity } from './users.entity';
import { CommentsEntity } from './comments.entity';
import { ViewsEntity } from './views.entity';
export declare class PostsEntity extends BaseEntity {
    title: string;
    description: string;
    user_id: number;
    photo: string;
    user: UsersEntity;
    comments: CommentsEntity[];
    views: ViewsEntity[];
}
