import { Injectable } from '@nestjs/common';
import { CreateDumytestingDto } from './dto/create-dumytesting.dto';
import { UpdateDumytestingDto } from './dto/update-dumytesting.dto';

@Injectable()
export class DumytestingService {
  create(createDumytestingDto: CreateDumytestingDto) {
    return 'This action adds a new dumytesting';
  }

  findAll() {
    return `This action returns all dumytesting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dumytesting`;
  }

  update(id: number, updateDumytestingDto: UpdateDumytestingDto) {
    return `This action updates a #${id} dumytesting`;
  }

  remove(id: number) {
    return `This action removes a #${id} dumytesting`;
  }
}
