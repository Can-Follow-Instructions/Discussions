import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn } from 'typeorm';

export class CreateDiscussionDto {
  @ApiProperty()
  parentId: number;

  @ApiProperty()
  content: string;

  @CreateDateColumn()
  createTime: Date;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  postId: number;
}
