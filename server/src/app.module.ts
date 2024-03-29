import { Module } from '@nestjs/common'; 
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { SeriesModule } from './modules/series/series.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OauthModule } from './modules/oauth/oauth.module';
import { DatabaseModule } from './modules/database';
import { CacheModule } from '@nestjs/cache-manager';
import { CharacterModule } from './modules/character/character.module';
import { RelationshipModule } from './modules/relationship/relationship.module';
import { BulletinModule } from './modules/bulletin/bulletin.module';
import { PostModule } from './modules/post/post.module';
import { CommentModule } from './modules/comment/comment.module';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }), 
    DatabaseModule,
    UserModule, 
    SeriesModule, 
    CharacterModule,
    RelationshipModule,
    BulletinModule,
    PostModule,
    CommentModule,
    OauthModule, 
    CacheModule.register({
      ttl: 10,
      max: 100000,
      isGlobal: true,
    }),
    PassportModule.register({ session: true })],
  controllers: [AppController],
})
export class AppModule {}
