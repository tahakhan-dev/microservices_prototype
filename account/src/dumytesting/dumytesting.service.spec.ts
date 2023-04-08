import { Test, TestingModule } from '@nestjs/testing';
import { DumytestingService } from './dumytesting.service';

describe('DumytestingService', () => {
  let service: DumytestingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DumytestingService],
    }).compile();

    service = module.get<DumytestingService>(DumytestingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
