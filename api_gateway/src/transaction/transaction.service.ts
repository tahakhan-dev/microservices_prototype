import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'transaction',
        brokers: ['104.198.153.245:29092'],
      },
      consumer: {
        groupId: 'user-consumer-transaction' // consumer same as in micro service
      }
    }
  })
  transactionClient: ClientKafka;

  async onModuleInit() {
    /**
     * Here We need to subscribe to topic,
     * so that we get response back
     */
    this.transactionClient.subscribeToResponseOf('createTransaction');
    this.transactionClient.subscribeToResponseOf('getAllTransaction');
    await this.transactionClient.connect();
  }

  async onModuleDestroy() {
    await this.transactionClient.close();
  }
  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionClient.send('createTransaction', { transactionPayload: createTransactionDto });
  }

  findAll() {
    return `This action returns all transaction`;
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
