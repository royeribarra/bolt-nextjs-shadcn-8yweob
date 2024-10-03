import { IBaseEntity } from './IBaseEntity';
import { IPerfil } from './IPerfil';

export interface IUser extends IBaseEntity {
  id: number;
  email: string;
  password: string;
  role: 'admin' | 'abogado' | 'cliente';
  perfil?: IPerfil;
}