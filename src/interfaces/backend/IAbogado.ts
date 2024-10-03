import { IBaseEntity } from './IBaseEntity';
import { IUser } from './IUser';
import { IHabilidad } from './IHabilidad';
import { IAplicacion } from './IAplicacion';

export interface IAbogado extends IBaseEntity {
  id: number;
  user: IUser;
  habilidades: IHabilidad[];
  aplicaciones: IAplicacion[];
}