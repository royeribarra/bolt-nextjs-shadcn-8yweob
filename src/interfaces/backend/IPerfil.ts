import { IBaseEntity } from './IBaseEntity';
import { IUser } from './IUser';

export interface IPerfil extends IBaseEntity {
  id: number;
  nombre: string;
  apellido: string;
  telefono?: string;
  user: IUser;
}