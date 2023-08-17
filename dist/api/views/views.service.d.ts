import { CreateViewDto } from './dto/create-view.dto';
import { ViewsEntity } from 'src/infra/entities/views.entity';
import { UserRepo } from 'src/infra/repositories/users.repo';
import { PostRepo } from 'src/infra/repositories/posts.repo';
import { ViewRepo } from 'src/infra/repositories/views.repo';
export declare class ViewsService {
    private readonly viewsRepo;
    private readonly usersRepo;
    private readonly postsRepo;
    constructor(viewsRepo: ViewRepo, usersRepo: UserRepo, postsRepo: PostRepo);
    addView(body: CreateViewDto): Promise<{
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: ViewsEntity;
    }>;
    findAll(): Promise<{
        message: string;
        data: ViewsEntity[];
    }>;
    getPostViews(id: number): Promise<{
        message: string;
        data: ViewsEntity[];
    }>;
}
