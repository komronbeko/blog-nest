import { BaseEntity } from './base.entity';
export declare class PostsEntity extends BaseEntity {
    title: string;
    description: string;
    user_id: number;
    photo: string;
}
