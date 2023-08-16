/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { PostsEntity } from '../entities/posts.entity';

export type PostRepo = Repository<PostsEntity>;
