import { Module } from '@nestjs/common';
import { DumytestingService } from './dumytesting.service';
import { DumytestingController } from './dumytesting.controller';

@Module({
  controllers: [DumytestingController],
  providers: [DumytestingService]
})
export class DumytestingModule {}
