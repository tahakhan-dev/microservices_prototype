import { Inject, Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'account',
        brokers: ['104.198.153.245:29092'],
      },
      consumer: {
        groupId: 'user-consumer-account' // consumer same as in micro service
      }
    }
  })
  accountClient: ClientKafka;

  async onModuleInit() {
    /**
     * Here We need to subscribe to topic,
     * so that we get response back
     */
    this.accountClient.subscribeToResponseOf('createAccount');
    this.accountClient.subscribeToResponseOf('getAllAccounts');
    this.accountClient.subscribeToResponseOf('getAccount');
    await this.accountClient.connect();
  }

  async onModuleDestroy() {
    await this.accountClient.close();
  }
  create(createAccountDto: CreateAccountDto) {
    return this.accountClient.send('createAccount', { accountPayload: createAccountDto });

  }

  findAll() {
    return this.accountClient.send('getAllAccounts', { payload: "payload" });
  }

  findOne(id: number) {
    return this.accountClient.send('getAccount', { accountId: `${id}` })
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
