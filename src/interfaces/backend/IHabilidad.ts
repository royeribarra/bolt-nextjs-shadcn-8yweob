import { IBaseEntity } from './IBaseEntity';

export interface IHabilidad extends IBaseEntity {
  id: number;
  nombre: string;
  descripcion?: string;
}