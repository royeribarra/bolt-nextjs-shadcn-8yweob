import { IBaseEntity } from './IBaseEntity';
import { IAbogado } from './IAbogado';
import { IOferta } from './IOferta';

export interface IAplicacion extends IBaseEntity {
  id: number;
  propuesta: string;
  precio_propuesto: number;
  abogado: IAbogado;
  oferta: IOferta;
}