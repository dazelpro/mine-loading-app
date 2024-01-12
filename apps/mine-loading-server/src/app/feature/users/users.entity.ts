import { Entity, Column, PrimaryGeneratedColumn, IsNull } from 'typeorm';

@Entity({
  synchronize: true
})
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: string;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'id_mine', nullable: true })
  id_mine: number;

  @Column({ name: 'id_role', nullable: true })
  id_role: number;

  @Column({ name: 'last_login_time', nullable: true })
  last_login_time: string;

}
