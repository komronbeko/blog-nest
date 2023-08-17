import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
        message: string;
        data: string;
    }>;
    register(body: RegisterDto): Promise<{
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
