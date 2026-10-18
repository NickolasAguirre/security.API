import { Test, TestingModule } from '@nestjs/testing';
import { AuthPortService } from './auth-port.service.js';

describe('AuthPortService', () => {
  let service: AuthPortService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthPortService],
    }).compile();

    service = module.get<AuthPortService>(AuthPortService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
