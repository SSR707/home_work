import { Role } from 'src/common/enums/enums';
import { Order } from '../../order/entities/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

Entity();
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  fullname: string;

  @Column({ length: 500, unique: true })
  email: string;

  @Column({ length: 500 })
  phone: string;

  @Column({ length: 500 })
  password: string;

  @Column({ length: 500 })
  refresh_token: string;

  @Column({ enum: Role, default: Role.USER })
  role: string;

  @Column({ default: false })
  is_active: boolean;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
