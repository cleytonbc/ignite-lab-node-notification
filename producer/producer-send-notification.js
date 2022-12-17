import { Kafka } from 'kafkajs'
import {randomUUID} from 'node:crypto'

async function bootstrap() {
    const kafka = new Kafka({
        clientId: 'notifications',
        brokers: ['localhost:9092'],
    })

    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
        topic: 'notifications.send-notification',
        messages: [
            {
                value: JSON.stringify({
                    category: 'social',
                    content: 'Nova solicitação de amizade enviado pelo kafka!',
                    recipientId: randomUUID(),
                })
            }
        ]
    })

    await producer.disconnect()
}

bootstrap()