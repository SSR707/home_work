import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'otp' })
export class Otp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  email: string;

  @Column()
  otp_code: number;

  @Column({ type: 'timestamp', nullable: false })
  expire_at: Date;
}
