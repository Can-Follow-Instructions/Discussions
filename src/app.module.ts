import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DiscussionsModule } from './discussions/discussions.module';

@Module({
  imports: [ConfigModule.forRoot(), DiscussionsModule],
})
export class AppModule {}
