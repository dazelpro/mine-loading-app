import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  synchronize: true
})
export class Mine {
  @PrimaryGeneratedColumn({ name: 'id_mine' })
  id_mine: string;

  @Column({ name: 'mine_name' })
  mine_name: string;

  @Column({ name: 'location' })
  location: string;

  @Column({ name: 'operation_status' })
  operation_status: string;

  @Column({ name: 'contact_information' })
  contact_information: string;

  @Column({ name: 'capacity' })
  capacity: string;
}
