import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): Promise<{
        message: string;
        newComment: import("../../infra/entities/comments.entity").CommentsEntity;
    }>;
    findAll(): Promise<{
        message: string;
        data: import("../../infra/entities/comments.entity").CommentsEntity[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: import("../../infra/entities/comments.entity").CommentsEntity;
    }>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
