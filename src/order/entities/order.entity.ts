import { Status } from 'src/common/enums/enums';
import { User } from '../../user/entities/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderProduct } from 'src/order-product/entities/order-product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column({ type: 'decimal' })
  total_price: number;

  @Column({ enum: Status, default: Status.PENDING })
  status: string;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  orderProducts: OrderProduct[];
}
