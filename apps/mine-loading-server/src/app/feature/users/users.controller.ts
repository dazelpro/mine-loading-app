import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Post,
} from '@nestjs/common';
import { responseError, responseSuccess } from '../../utils/response.helper';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { UsersLoginDto, UsersRegisterDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  @HttpCode(200)
  async login(@Body() req: UsersLoginDto) {
    try {
      const result = await this.usersService.login(req);
      return responseSuccess('You are successfully logged in', result);
    } catch (error) {
      return responseError(error.message);
    }
  }

  @Post('register')
  async register(@Body() req: UsersRegisterDto) {
    try {
      const hashedPassword = await bcrypt.hash(req.password, 12);
      const user = await this.usersService.findEmail(req.email);
      if (user) {
        throw new BadRequestException('Credentials Exist');
      }
      const result = await this.usersService.create({
        password: hashedPassword,
        username: req.username,
        email: req.email,
        id_role: req.id_role,
        id_mine: req.id_mine
      });
      return responseSuccess('Create Account Success', result);
    } catch (error) {
      Logger.error(error);
      return responseError(error.message);
    }
  }

  @Get('getUsers')
  async getUsersAll() {
    try {
      const result = await this.usersService.findAll();
      return responseSuccess('Get All Users Success', result);
    } catch (error) {
      return responseError(error.message);
    }
  }
}
