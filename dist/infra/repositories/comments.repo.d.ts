import { Repository } from 'typeorm';
import { CommentsEntity } from '../entities/comments.entity';
export type CommentRepo = Repository<CommentsEntity>;
