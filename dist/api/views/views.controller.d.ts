import { ViewsService } from './views.service';
import { CreateViewDto } from './dto/create-view.dto';
export declare class ViewsController {
    private readonly viewsService;
    constructor(viewsService: ViewsService);
    viewPlus(createViewDto: CreateViewDto): Promise<{
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: import("../../infra/entities/views.entity").ViewsEntity;
    }>;
    findAll(): Promise<{
        message: string;
        data: import("../../infra/entities/views.entity").ViewsEntity[];
    }>;
    postViews(id: string): Promise<{
        message: string;
        data: import("../../infra/entities/views.entity").ViewsEntity[];
    }>;
}
