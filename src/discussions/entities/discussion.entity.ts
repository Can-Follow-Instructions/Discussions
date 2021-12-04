import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Discussion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parentId: number;

  @Column()
  content: string;

  @Column()
  createTime: Date;

  @Column()
  userId: number;

  @Column()
  postId: number;

  replies: Discussion[];
}
