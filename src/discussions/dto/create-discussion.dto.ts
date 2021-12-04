import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';

export class CreateDiscussionDto {
  @ApiProperty()
  commentId: number;

  @ApiProperty()
  content: string;

  @IsDate()
  @ApiProperty()
  createTime: Date;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  postId: number;
}
