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
      type: 'mysql',
      host: '104.198.153.245',
      port: 3306,
      username: 'root',
      password: 'admin@123',
      database: 'micro_prototype_account',
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
