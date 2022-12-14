import {
  Notification,
  NotificationProps,
} from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: NotificationProps[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
