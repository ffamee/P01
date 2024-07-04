import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/user.entity'
import { UserModule } from './user/user.module';
@Module({
  imports: [
		TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test',
      password: 'password',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
		CourseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
