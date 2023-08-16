import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserRepo } from 'src/infra/repositories/users.repo';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepo;
    private readonly jwt;
    constructor(usersRepo: UserRepo, jwt: JwtService);
    login(loginDto: LoginDto): unknown;
    register(registerdto: RegisterDto): unknown;
}
