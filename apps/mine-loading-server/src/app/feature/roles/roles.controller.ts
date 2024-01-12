import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { responseError, responseSuccess } from '../../utils/response.helper';
import { RolesService } from './roles.service';
import { RolesAddDto } from './roles.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get('getRoles')
  async getUsersAll() {
    try {
      const result = await this.rolesService.findAll();
      return responseSuccess('Get All Roles Success', result);
    } catch (error) {
      return responseError(error.message);
    }
  }

  @Post('addRoles')
  async register(@Body() req: RolesAddDto) {
    try {
      const result = await this.rolesService.create(req);
      return responseSuccess('Create Account Success', result);
    } catch (error) {
      return responseError(error.message);
    }
  }
}
