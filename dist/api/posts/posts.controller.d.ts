import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<{
        message: string;
        data: import("../../infra/entities/posts.entity").PostsEntity;
    }>;
    findAll(): Promise<{
        message: string;
        data: import("../../infra/entities/posts.entity").PostsEntity[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: import("../../infra/entities/posts.entity").PostsEntity;
    }>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
