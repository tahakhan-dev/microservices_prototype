import { Test, TestingModule } from '@nestjs/testing';
import { DumytestingController } from './dumytesting.controller';
import { DumytestingService } from './dumytesting.service';

describe('DumytestingController', () => {
  let controller: DumytestingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DumytestingController],
      providers: [DumytestingService],
    }).compile();

    controller = module.get<DumytestingController>(DumytestingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
