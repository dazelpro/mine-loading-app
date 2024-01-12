import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { responseError, responseSuccess } from '../../utils/response.helper';
import { MinesService } from './mine.service';
import { MinesAddDto } from './mine.dto';

@Controller('mines')
export class MinesController {
  constructor(private readonly minesService: MinesService) {}

  @Get('getMines')
  async getUsersAll() {
    try {
      const result = await this.minesService.findAll();
      return responseSuccess('Get All Mine Success', result);
    } catch (error) {
      return responseError(error.message);
    }
  }

  @Post('addMines')
  async register(@Body() req: MinesAddDto): Promise<any> {
    try {
      const result = await this.minesService.create(req);
      return responseSuccess('Create Account Success', result);
    } catch (error) {
      return responseError(error.message);
    }
  }
}
