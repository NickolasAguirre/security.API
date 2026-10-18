import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './infrastructure/modules/auth.module.js';
import { UserModule } from './infrastructure/modules/user.module.js';
import { AuthPortService } from './core/domain/ports/auth-port/auth-port.service.js';
import { UserPortService } from './core/domain/ports/user-port/user-port.service.js';
import { AuthRepositoryService } from './infrastructure/repositories/auth.repository.service.js';
import { AuthRepositoryService } from './infrastructure/repositories/auth/auth.repository.service.js';
import { UserRepositoryService } from './infrastructure/repositories/user/user.repository.service.js';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, AuthPortService, UserPortService, AuthRepositoryService, UserRepositoryService],
})
export class AppModule {}
