import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read.notification';
import { SendNotification } from '@application/use-cases/send-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

interface NotificationIdPayload {
  notificationId: string;
}

@Controller()
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private cancelNotification: CancelNotification,
  ) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { content, category, recipientId }: SendNotificationPayload,
  ) {
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }

  @EventPattern('notifications.read-notification')
  async handleReadNotification(
    @Payload() { notificationId }: NotificationIdPayload,
  ) {
    await this.readNotification.execute({
      notificationId,
    });
  }

  @EventPattern('notifications.unread-notification')
  async handleUnreadNotification(
    @Payload() { notificationId }: NotificationIdPayload,
  ) {
    await this.unreadNotification.execute({
      notificationId,
    });
  }

  @EventPattern('notifications.cancel-notification')
  async handleCancelNotification(
    @Payload() { notificationId }: NotificationIdPayload,
  ) {
    await this.cancelNotification.execute({
      notificationId,
    });
  }
}
