import { OrderProduct } from 'src/order-product/entities/order-product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ length: 500 })
  info: string;

  @Column()
  quantity: number;

  @Column({ default: true })
  is_active: boolean;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  orderProducts: OrderProduct[];
}
