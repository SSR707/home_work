import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'otp' })
export class Otp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  user_id: number;

  @Column({ nullable: false })
  otp: string;

  @Column({ type: 'timestamp', nullable: false })
  expire_at: Date;
}
