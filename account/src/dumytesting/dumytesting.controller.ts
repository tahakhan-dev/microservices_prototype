import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DumytestingService } from './dumytesting.service';
import { CreateDumytestingDto } from './dto/create-dumytesting.dto';
import { UpdateDumytestingDto } from './dto/update-dumytesting.dto';

@Controller()
export class DumytestingController {
  constructor(private readonly dumytestingService: DumytestingService) {}

  @MessagePattern('createDumytesting')
  create(@Payload() createDumytestingDto: CreateDumytestingDto) {
    return this.dumytestingService.create(createDumytestingDto);
  }

  @MessagePattern('findAllDumytesting')
  findAll() {
    return this.dumytestingService.findAll();
  }

  @MessagePattern('findOneDumytesting')
  findOne(@Payload() id: number) {
    return this.dumytestingService.findOne(id);
  }

  @MessagePattern('updateDumytesting')
  update(@Payload() updateDumytestingDto: UpdateDumytestingDto) {
    return this.dumytestingService.update(updateDumytestingDto.id, updateDumytestingDto);
  }

  @MessagePattern('removeDumytesting')
  remove(@Payload() id: number) {
    return this.dumytestingService.remove(id);
  }
}
