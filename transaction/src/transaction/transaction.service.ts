import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Transaction) private readonly TransactionRepository: Repository<Transaction>) { }

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'account',
        brokers: ['104.198.153.245:29092'],
      },
      consumer: {
        groupId: 'user-consumer-account-2' // consumer same as in micro service
      }
    }
  })
  accountClient: ClientKafka;

  async onModuleInit() {
    /**
     * Here We need to subscribe to topic,
     * so that we get response back
     */
    this.accountClient.subscribeToResponseOf('getTransactionAccount');
    await this.accountClient.connect();
  }

  async create(createTransactionDto: any) {

    let resp = await this.accountClient.send('getTransactionAccount', { accountId: `${createTransactionDto.transactionPayload.accountId}` }).toPromise()

    if (resp == undefined) {
      return "there is some internal error please try again later"
    }

    if (Object.keys(resp).length <= 0) {
      return "no account found against this transaction"
    }
    return await this.TransactionRepository.save(createTransactionDto.transactionPayload);
  }

  findAll() {
    return this.TransactionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
