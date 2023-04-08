import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) { }

  @MessagePattern('createAccount')
  async create(@Payload() createAccountDto: CreateAccountDto) {
    return await this.accountsService.create(createAccountDto);
  }

  @MessagePattern('getAllAccounts')
  async findAll() {
    return await this.accountsService.findAll();
  }

  @MessagePattern('getAccount')
  async findOne(@Payload() payload: any) {
    let res = await this.accountsService.findOne(+payload.accountId);
    return { ...res }
  }

  @MessagePattern('getTransactionAccount')
  async findOne2(@Payload() payload: any) {
    let res = await this.accountsService.findOne(+payload.accountId);
    return { ...res }
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }
}
