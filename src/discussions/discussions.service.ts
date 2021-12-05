import { Injectable } from '@nestjs/common';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import * as AWS from 'aws-sdk';
import { randomUUID } from 'crypto';

@Injectable()
export class DiscussionsService {
  private db: AWS.DynamoDB.DocumentClient;
  constructor() {
    AWS.config.update({ region: 'us-east-1' });
    this.db = new AWS.DynamoDB.DocumentClient();
  }

  async create(createDiscussionDto: CreateDiscussionDto) {
    const discussion = {
      ...createDiscussionDto,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
    };
    this.db
      .put({
        TableName: 'discussion',
        Item: discussion,
      })
      .promise();
  }

  async findAll() {
    const resp = await this.db.scan({ TableName: 'discussion' }).promise();
    return resp.Items;
  }

  async findByPostId(postId: number) {
    const discussions = await this.db
      .query({
        TableName: 'discussion',
        IndexName: 'postId-createdAt-index',
        KeyConditionExpression: 'postId = :postId',
        ExpressionAttributeValues: {
          ':postId': postId,
        },
      })
      .promise();

    const nodes = {};

    nodes[''] = {
      replies: [],
    };

    discussions.Items.forEach((item) => {
      nodes[item.id] = item;
      item.replies = [];
    });

    discussions.Items.forEach((item) => {
      const parent = nodes[item.parentId];
      parent.replies.push(item);
    });

    return nodes[''].replies;
  }
}
