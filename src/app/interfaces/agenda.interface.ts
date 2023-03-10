import { ResponseInterface } from './response.interface';

export interface AgendaResponseInterface extends ResponseInterface {
  event: AgendaInterface;
}

export interface AgendaDoctorInterface extends ResponseInterface {
  agenda: {
    events: string[];
    uuid: string;
  };
}

export interface AgendaInterface {
  name: string;
  uuid: string;
  start_date: string;
  agenda: string;
}
