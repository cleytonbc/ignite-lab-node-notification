import { Kafka } from 'kafkajs'
import { argv } from 'node:process'


async function bootstrap() {
    const kafka = new Kafka({
        clientId: 'notifications',
        brokers: ['localhost:9092'],
    })
    const producer = kafka.producer()

    await producer.connect()
    
    await producer.send({
        topic: 'notifications.read-notification',
        messages: [
            {
                value: JSON.stringify({
                    notificationId: argv[2],
                })
            }
        ]
    })

    await producer.disconnect()
}

bootstrap()