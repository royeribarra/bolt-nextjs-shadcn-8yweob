export interface IUserFront {
  id: number;
  email: string;
  role: 'admin' | 'abogado' | 'cliente';
  nombre: string;
  apellido: string;
  telefono?: string;
}