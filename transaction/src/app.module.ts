import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transaction } from './transaction/entities/transaction.entity';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '104.198.153.245',
      port: 3306,
      username: 'root',
      password: 'admin@123',
      database: 'micro_prototype_transaction',
      logging: true,
      entities: [
        Transaction
      ],
      synchronize: false,
    }),
    TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
