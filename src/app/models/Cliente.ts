export class Cliente {
    id: number;
    nombre: string;
    apellido: string;
    correoElectronico: string;
    telefono: string;
  
    constructor(id: number, nombre: string, apellido: string, correoElectronico: string, telefono: string) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correoElectronico = correoElectronico;
      this.telefono = telefono;
    }
  }