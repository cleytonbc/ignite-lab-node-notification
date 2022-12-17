import { Injectable } from '@nestjs/common';
import { OnModuleDestroy } from '@nestjs/common/interfaces';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['localhost:9092'],
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
