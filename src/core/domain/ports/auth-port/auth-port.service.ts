import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class AuthPortService {

    abstract login(loginDto: any): any;
    abstract logout(): any;
}
