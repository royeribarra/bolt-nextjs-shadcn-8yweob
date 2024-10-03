export interface IOfertaFront {
  id: number;
  titulo: string;
  descripcion: string;
  presupuesto: number;
  cliente_id: number;
  habilidades_requeridas: string[];
  fecha_creacion: string;
}