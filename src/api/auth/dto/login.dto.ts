import { IsAlphanumeric, IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
