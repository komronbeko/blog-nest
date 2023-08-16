import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/infra/entities/users.entity';
import { UserRepo } from 'src/infra/repositories/users.repo';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersEntity) private readonly usersRepo: UserRepo,
    private readonly jwt: JwtService,
  ) {}
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const findUser = await this.usersRepo.findOneBy({ email });

    if (!findUser) throw new ForbiddenException();

    const comparePass = await bcrypt.compare(password, findUser.password);

    if (!comparePass) throw new ForbiddenException();

    const token = this.jwt.sign({ id: findUser.id });

    return { message: 'success', data: token };
  }

  async register(registerdto: RegisterDto) {
    const { email, password, photo, username } = registerdto;

    const findUser = await this.usersRepo.findOneBy({ username });

    if (findUser) throw new ForbiddenException();

    const hashedPass = await bcrypt.hash(password, 12);

    const newUser = await this.usersRepo.create({
      username,
      email,
      password: hashedPass,
      photo,
    });
    await this.usersRepo.save(newUser);

    const token = this.jwt.sign({ id: newUser.id });

    return { message: 'success', data: { ...newUser, token } };
  }
}
