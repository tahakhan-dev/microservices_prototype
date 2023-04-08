import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) { }

  @MessagePattern('createTransaction')
  create(@Payload() createTransactionDto: CreateTransactionDto) {
    let resp = this.transactionService.create(createTransactionDto);
    return resp
  }

  @MessagePattern('getAllTransaction')
  findAll() {
    return this.transactionService.findAll();
  }

}
