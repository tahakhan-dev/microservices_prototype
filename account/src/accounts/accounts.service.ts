import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(@InjectRepository(Account) private readonly AccountRepository: Repository<Account>) { }

  create(createAccountDto: any) {
    return this.AccountRepository.save(createAccountDto.accountPayload)

  }

  findAll() {
    return this.AccountRepository.find();
  }

  async findOne(id: number) {
  return  await this.AccountRepository.findOne({ where: { Id: id } });
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
