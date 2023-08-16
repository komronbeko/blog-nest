import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const token =
      request.headers.authorization?.split(' ')[1] ??
      request.headers.authorization;

    if (!token) return false;

    const verified = this.jwt.verify(token, {
      secret: process.env.JWT_SEC_KEY,
    });

    request.userId = verified.id;

    return true;
  }
}
