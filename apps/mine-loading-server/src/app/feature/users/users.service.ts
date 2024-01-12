import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, getConnection, Repository } from 'typeorm';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../roles/roles.entity';
import { Mine } from '../mine/mine.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private jwtService: JwtService,
    private dataSource: DataSource
  ) {}

  async findAll() {
    const queryBuilder = await this.dataSource
      .getRepository(User)
      .createQueryBuilder('user')
      .leftJoinAndSelect(Role, 'role', 'user.id_role = role.id_role') // Join based on id_role
      .leftJoinAndSelect(Mine, 'mine', 'user.id_mine = mine.id_mine') // Join based on id_role
      try {
        const users = await queryBuilder.getRawMany();
        console.log(users)
        // Map the raw results to the desired format
        const mappedUsers = users.map((user) => {
          console.log(user)
          return {
            id: user.user_id,
            username: user.user_username,
            email: user.user_email,
            password: user.user_password,
            mine_name: user.mine_mine_name,
            last_login_time: user.user_last_login_time,
            role: user.role_role_name
          };
        });
  
        return mappedUsers;
      } catch (error) {
        throw new Error(`Error executing query: ${error.message}`);
      }
  }

  async findOne(condition: any) {
    const result = await getConnection()
      .createQueryBuilder(User, 'user')
      .where('user.email = :email', { email: condition })
      .getOne();
    return result;
  }

  async findEmail(username: string) {
    return this.usersRepository.findOneBy({ username: username });
  }

  async create(data: Partial<User>) {
    return this.usersRepository.save(data);
  }
  async login(data: Partial<User>) {
    console.log(data)
    const user = await this.findEmail(data.username);
    if (!user) {
      throw new BadRequestException('Users credentials not Found');
    }
    if (!(await bcrypt.compare(data.password, user.password))) {
      throw new BadRequestException(`Password doesn't match `);
    }

    const { password, ...result } = user;
    return {
      token: this.jwtService.sign(result),
      ...result,
    };
  }
}
