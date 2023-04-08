import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transaction } from './transaction/entities/transaction.entity';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.TYPE,
      host: process.env.HOST,
      port: process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
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
