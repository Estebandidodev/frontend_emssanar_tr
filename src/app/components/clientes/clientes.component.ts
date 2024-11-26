import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
  imports: [CommonModule, FormsModule,FormularioClienteComponent]
})
export class ClientesComponent implements OnInit {

  clientes?: Cliente[];
  clienteSeleccionado: Cliente = new Cliente(0, '', '', '', '');
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
     this.clienteService.obtenerClientes().subscribe(clientes => {
       this.clientes = clientes;
     });

    // const clientesPrueba: Cliente[] = [
    //   { id: 1, nombre: 'Juan', apellido: 'Pérez', correoElectronico: 'juan.perez@example.com', telefono: '123456789' },
    //   { id: 2, nombre: 'María', apellido: 'García', correoElectronico: 'maria.garcia@example.com', telefono: '987654321' },
    //   { id: 3, nombre: 'Carlos', apellido: 'Rodríguez', correoElectronico: 'carlos.rodriguez@example.com', telefono: '555123456' }
    // ];
  
    // this.clientes = clientesPrueba;
  }

  
  eliminarCliente(cliente: Cliente): void {
    // Implementar la lógica para eliminar el cliente
    console.log('Eliminar cliente:', cliente);
    this.clienteService.eliminarCliente(cliente.id).subscribe(clientes => {
      this.obtenerClientes();
    });
  }

  editarCliente(cliente: Cliente): void {
    this.clienteSeleccionado = cliente;
    const modal = document.getElementById('modalEditarCliente');
    modal?.classList.add('show');
    modal!.style.display = 'block';
  }
  
  guardarCambios(): void {
    this.clienteService.actualizarCliente(this.clienteSeleccionado).subscribe(() => {
      const modal = document.getElementById('modalEditarCliente');
      modal?.classList.remove('show');
      modal!.style.display = 'none';
      this.obtenerClientes();
    });
  }

  cerrarModal(): void {
    const modal = document.getElementById('modalEditarCliente');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
  cerrarModalCrear(): void {
    const modal = document.getElementById('modalCrearCliente');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  abrirFormularioCrearCliente(): void {
    const modal = document.getElementById('modalCrearCliente');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }
}