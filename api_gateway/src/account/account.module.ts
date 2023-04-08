import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule { }
