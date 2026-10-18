import { Module } from '@nestjs/common';
import { UserService } from '../../core/application/services/user.service.js';
import { UserController } from '../../controller/user.controller.js';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
