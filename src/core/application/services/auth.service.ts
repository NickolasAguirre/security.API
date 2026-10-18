import { Injectable } from '@nestjs/common';
import { AuthPortService } from '../../domain/ports/auth-port/auth-port.service.js';

@Injectable()
export class AuthService {

  constructor(private readonly authPortService: AuthPortService) {}
  login(loginDto: any) {
    return this.authPortService.login(loginDto);
  }
  logout() {
    return this.authPortService.logout();
  }


}
