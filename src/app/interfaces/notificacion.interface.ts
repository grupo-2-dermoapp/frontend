import { ResponseInterface } from './response.interface';

export interface NotificacionInterface {
  uuid: string;
  message: string;
  title: string;
}

export interface NotificacionResponseInterface extends ResponseInterface {
  notifications: NotificacionInterface;
}
