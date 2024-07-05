import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/user.entity'
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
@Module({
  imports: [
		TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      autoLoadEntities:true,
      synchronize: true,
    }),
		CourseModule, UserModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
