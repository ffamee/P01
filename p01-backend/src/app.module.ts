import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

@Module({
  imports: [],
  controllers: [AppController, CourseController],
  providers: [AppService, CourseService],
})
export class AppModule {}
