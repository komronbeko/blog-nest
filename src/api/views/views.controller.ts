import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ViewsService } from './views.service';
import { CreateViewDto } from './dto/create-view.dto';

@Controller('views')
export class ViewsController {
  constructor(private readonly viewsService: ViewsService) {}

  @Post()
  viewPlus(@Body() createViewDto: CreateViewDto) {
    return this.viewsService.addView(createViewDto);
  }

  @Get()
  findAll() {
    return this.viewsService.findAll();
  }

  @Get(':post_id')
  postViews(@Param('post_id') id: string) {
    return this.viewsService.getPostViews(+id);
  }
}
