import { IBaseEntity } from './IBaseEntity';
import { ICliente } from './ICliente';
import { IHabilidad } from './IHabilidad';
import { IAplicacion } from './IAplicacion';

export interface IOferta extends IBaseEntity {
  id: number;
  titulo: string;
  descripcion: string;
  presupuesto: number;
  cliente: ICliente;
  habilidades_requeridas: IHabilidad[];
  aplicaciones: IAplicacion[];
}