import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsEntity } from 'src/infra/entities/posts.entity';
import { PostRepo } from 'src/infra/repositories/posts.repo';
import { UserRepo } from 'src/infra/repositories/users.repo';
export declare class PostsService {
    private readonly postsRepo;
    private readonly usersRepo;
    constructor(postsRepo: PostRepo, usersRepo: UserRepo);
    create(body: CreatePostDto): Promise<{
        message: string;
        data: PostsEntity;
    }>;
    findAll(): Promise<{
        message: string;
        data: PostsEntity[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: PostsEntity;
    }>;
    update(id: number, body: UpdatePostDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
