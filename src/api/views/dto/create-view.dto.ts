import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateViewDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  post_id: number;
}
