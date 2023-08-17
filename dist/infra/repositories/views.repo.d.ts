import { Repository } from 'typeorm';
import { ViewsEntity } from '../entities/views.entity';
export type ViewRepo = Repository<ViewsEntity>;
