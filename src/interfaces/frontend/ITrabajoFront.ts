export interface ITrabajoFront {
  id: number;
  fecha_inicio: string;
  fecha_fin?: string;
  estado: 'en_progreso' | 'completado' | 'cancelado';
  aplicacion_id: number;
  abogado_id: number;
  cliente_id: number;
  oferta_id: number;
}