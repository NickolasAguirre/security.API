import { Test, TestingModule } from '@nestjs/testing';
import { UserPortService } from './user-port.service.js';

describe('UserPortService', () => {
  let service: UserPortService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPortService],
    }).compile();

    service = module.get<UserPortService>(UserPortService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
