/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';

export type UserRepo = Repository<UsersEntity>;
