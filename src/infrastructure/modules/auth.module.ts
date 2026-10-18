import { Module } from '@nestjs/common';
import { AuthService } from '../../core/application/services/auth.service.js';
import { AuthController } from '../../controller/auth.controller.js';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
