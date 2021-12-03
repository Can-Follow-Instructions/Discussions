import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Discussion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commentId: number;

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
