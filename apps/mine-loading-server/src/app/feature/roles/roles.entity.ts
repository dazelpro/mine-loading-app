import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  synchronize: true
})
export class Role {
  @PrimaryGeneratedColumn({ name: 'id_role' })
  id_role: string;

  @Column({ name: 'role_name' })
  role_name: string;
}
