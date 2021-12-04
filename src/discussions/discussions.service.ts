import { Injectable } from '@nestjs/common';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import { UpdateDiscussionDto } from './dto/update-discussion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discussion } from './entities/discussion.entity';

@Injectable()
export class DiscussionsService {
  constructor(
    @InjectRepository(Discussion)
    private discussionRepository: Repository<Discussion>,
  ) {}

  create(createDiscussionDto: CreateDiscussionDto) {
    return this.discussionRepository.save(this.discussionRepository.create(createDiscussionDto));
  }

  findAll() {
    return this.discussionRepository.find();
  }

  findOne(id: number) {
    return this.discussionRepository.findOne(id);
  }

  async findByPostId(id: number) {
    const query = this.discussionRepository.createQueryBuilder('discussion');
    query.where('discussion.postId = :postId', { postId: id });
    const tmpResult = await query.getMany();
    const nodes = {};
    nodes[0] = {
      replies: [],
    };

    tmpResult.forEach(function (item) {
      nodes[item.id] = item;
      item.replies = [];
    });

    tmpResult.forEach(function (item) {
      const parent = nodes[item.commentId];
      parent.replies.push(item);
    });

    return nodes[0].replies;
  }

  update(id: number, updateDiscussionDto: UpdateDiscussionDto) {
    return this.discussionRepository.update(id, updateDiscussionDto);
  }

  remove(id: number) {
    return this.discussionRepository.delete(id);
  }
}
