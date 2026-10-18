import { LoginDto } from '../core/application/dto/auth/LoginDto.js';
import { AuthService } from '../core/application/services/auth.service.js';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  @Post('login')
  login(@Body() login: LoginDto) {
    return this.authService.login(loginDto);
  }
  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
