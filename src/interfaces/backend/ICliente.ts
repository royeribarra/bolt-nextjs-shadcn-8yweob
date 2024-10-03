import { IBaseEntity } from './IBaseEntity';
import { IUser } from './IUser';
import { IOferta } from './IOferta';

export interface ICliente extends IBaseEntity {
  id: number;
  user: IUser;
  ofertas: IOferta[];
}