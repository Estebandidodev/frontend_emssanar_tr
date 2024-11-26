import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/Producto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormularioProductoComponent,CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos?: Producto[];
  productoSeleccionado: Producto = new Producto( '','', 0, 0, '');

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
     this.productoService.obtenerProductos().subscribe(productos => {
       this.productos = productos;
     });
    // const productosPrueba: Producto[] = [
    //   { 
    //     id: 1, 
    //     nombre: 'Camisa', 
    //     descripcion: 'Camisa de manga larga', 
    //     precio: 20.99, 
    //     cantidadDisponible: 10, 
    //     foto: 'ruta/a/la/foto1.jpg' 
    //   },
    //   { 
    //     id: 2, 
    //     nombre: 'Pantalon', 
    //     descripcion: 'Pantalon de vestir', 
    //     precio: 30.99, 
    //     cantidadDisponible: 5, 
    //     foto: 'ruta/a/la/foto2.jpg' 
    //   },
    //   { 
    //     id: 3, 
    //     nombre: 'Zapatos', 
    //     descripcion: 'Zapatos de cuero', 
    //     precio: 40.99, 
    //     cantidadDisponible: 8, 
    //     foto: 'ruta/a/la/foto3.jpg' 
    //   }
    // ];
  
    // this.productos = productosPrueba;
  }

  editarProducto(producto: Producto): void {
    this.productoSeleccionado = producto;
    const modal = document.getElementById('modalEditarProducto');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  guardarCambiosProducto(): void {
    this.productoService.actualizarProducto(this.productoSeleccionado).subscribe(() => {
      const modal = document.getElementById('modalEditarProducto');
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
      }
      this.obtenerProductos();
    });
  }
  cargarFoto(event: any): void {
    const archivo = event.target.files[0];
    // Aquí puedes procesar la foto y asignarla a la propiedad foto del producto seleccionado
    this.productoSeleccionado.foto = archivo;
  }
  
  eliminarProducto(producto: Producto): void {
    // Implementar la lógica para eliminar el producto
    console.log('Eliminar producto:', producto);
  }
  cerrarModal(): void {
    const modal = document.getElementById('modalEditarProducto');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
  cerrarModalCrear(): void {
    const modal = document.getElementById('modalCrearProducto');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  abrirFormularioCrearProducto(): void {
    const modal = document.getElementById('modalCrearProducto');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }
}