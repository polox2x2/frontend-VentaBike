type Bike = {
  id: number;
  nombre: string;
  description: string;
  cilindrada: number;
  estado: boolean;
  precio: number;
};

type User = {
  id?: number;
  nombres: string;
  apellidos: string;
  correo: string;
  tarjeta: string;
  fecha?: Date;
  cvc: string;
  vencimiento: string;
};
