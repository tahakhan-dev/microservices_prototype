import { PartialType } from '@nestjs/mapped-types';
import { CreateDumytestingDto } from './create-dumytesting.dto';

export class UpdateDumytestingDto extends PartialType(CreateDumytestingDto) {
  id: number;
}
