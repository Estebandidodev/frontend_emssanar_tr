import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './services/cliente.service';
import { ProductoService } from './services/producto.service';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ClientesComponent, ProductosComponent,CommonModule, HttpClientModule],
  providers: [ClienteService, ProductoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda-de-ropa';
  mostrarTablaClientes = false;
  mostrarTablaProductos = false;

  mostrarClientes(): void {
    this.mostrarTablaClientes = true;
    this.mostrarTablaProductos = false;
  }

  mostrarProductos(): void {
    this.mostrarTablaClientes = false;
    this.mostrarTablaProductos = true;
  }
}