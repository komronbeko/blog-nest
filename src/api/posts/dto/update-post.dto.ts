import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
import { IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  photo: string;
}
