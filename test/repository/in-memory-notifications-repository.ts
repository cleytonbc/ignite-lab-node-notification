import {
  Notification,
  NotificationProps,
} from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public notifications: NotificationProps[] = [];
}
