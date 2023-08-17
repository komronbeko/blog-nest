import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserRepo } from 'src/infra/repositories/users.repo';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepo;
    private readonly jwt;
    constructor(usersRepo: UserRepo, jwt: JwtService);
    login(loginDto: LoginDto): Promise<{
        message: string;
        data: string;
    }>;
    register(registerdto: RegisterDto): Promise<{
        message: string;
        data: {
            token: string;
            username: string;
            email: string;
            password: string;
            photo: string;
            posts: import("../../infra/entities/posts.entity").PostsEntity[];
            comments: import("../../infra/entities/comments.entity").CommentsEntity[];
            views: import("../../infra/entities/views.entity").ViewsEntity[];
            id: number;
            createdAt: Date;
            updated_at: Date;
        };
    }>;
}
