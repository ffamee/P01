import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.interface';

@Controller('/course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getCourse(): Promise<Course[]>{
    return this.courseService.getCourse();
  }
}
