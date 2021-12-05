import { ApiProperty } from '@nestjs/swagger';

export class CreateDiscussionDto {
  @ApiProperty()
  parentId: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  postId: number;
}
