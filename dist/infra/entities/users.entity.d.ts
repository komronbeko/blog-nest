import { BaseEntity } from './base.entity';
import { PostsEntity } from './posts.entity';
import { CommentsEntity } from './comments.entity';
import { ViewsEntity } from './views.entity';
export declare class UsersEntity extends BaseEntity {
    username: string;
    email: string;
    password: string;
    photo: string;
    posts: PostsEntity[];
    comments: CommentsEntity[];
    views: ViewsEntity[];
}
