import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['104.198.153.245:29092'],
        },
        consumer: {
          groupId: 'user-consumer-transaction', // declaring consumer here
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
