import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Discussion } from './discussions/entities/discussion.entity';
import { DiscussionsModule } from './discussions/discussions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'passwd',
      database: process.env.DATABASE_NAME || 'discussion',
      entities: [Discussion],
      synchronize: true, // only for dev
      logging: true,
    }),
    DiscussionsModule,
  ],
})
export class AppModule {}
