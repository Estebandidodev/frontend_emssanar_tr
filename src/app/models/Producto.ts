export class Producto {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidadDisponible: number;
    foto: string;
  
    constructor(
      nombre: string,
      descripcion: string,
      precio: number,
      cantidadDisponible: number,
      foto: string,
      id?: number
    ) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.cantidadDisponible = cantidadDisponible;
      this.foto = foto;
    }
  }