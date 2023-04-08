import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';
import { DumytestingModule } from './dumytesting/dumytesting.module';
import { Account } from './accounts/entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE,
      host: process.env.HOST,
      port: process.env.PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      logging: true,
      entities: [
        Account
      ],
      synchronize: false,
    }),
    AccountsModule,
    DumytestingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
