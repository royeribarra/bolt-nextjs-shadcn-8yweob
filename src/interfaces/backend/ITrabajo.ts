import { IBaseEntity } from './IBaseEntity';
import { IAplicacion } from './IAplicacion';

export interface ITrabajo extends IBaseEntity {
  id: number;
  fecha_inicio: Date;
  fecha_fin?: Date;
  estado: 'en_progreso' | 'completado' | 'cancelado';
  aplicacion_aceptada: IAplicacion;
}