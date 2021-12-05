import { ApiProperty } from '@nestjs/swagger';

export class CreateDiscussionDto {
  @ApiProperty()
  parentId: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  postId: number;
}
