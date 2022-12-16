import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { SendNotification } from '../../application/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { ReadNotification } from '@application/use-cases/read.notification';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    UnreadNotification,
    ReadNotification,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
