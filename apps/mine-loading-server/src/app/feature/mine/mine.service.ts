import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { Mine } from './mine.entity';

@Injectable()
export class MinesService {
  constructor(
    @InjectRepository(Mine) private readonly rolesRepository: Repository<Mine>,
  ) {}

  async findAll(): Promise<Mine[]> {
    return this.rolesRepository.find();
  }

  async create(data: any): Promise<any> {
    return this.rolesRepository.save(data);
  }
}
