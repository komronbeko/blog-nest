import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsEntity } from 'src/infra/entities/comments.entity';
import { CommentRepo } from 'src/infra/repositories/comments.repo';
import { UserRepo } from 'src/infra/repositories/users.repo';
import { PostRepo } from 'src/infra/repositories/posts.repo';
export declare class CommentsService {
    private readonly commentsRepo;
    private readonly usersRepo;
    private readonly postsRepo;
    constructor(commentsRepo: CommentRepo, usersRepo: UserRepo, postsRepo: PostRepo);
    create(body: CreateCommentDto): Promise<{
        message: string;
        newComment: CommentsEntity;
    }>;
    findAll(): Promise<{
        message: string;
        data: CommentsEntity[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: CommentsEntity;
    }>;
    update(id: number, body: UpdateCommentDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
