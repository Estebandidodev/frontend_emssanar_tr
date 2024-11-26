import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/Producto';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent implements OnInit {

  formularioProducto: FormGroup = new FormGroup({}); // Inicializa la propiedad con un nuevo FormGroup vacío
  producto: Producto = new Producto('', '', 0, 0, '', undefined);
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.formularioProducto = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      cantidadDisponible: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required)
    });
  }

  guardarProducto(): void {
    if (this.formularioProducto.valid) {
      this.producto = new Producto(
        this.formularioProducto.get('nombre')?.value,
        this.formularioProducto.get('descripcion')?.value,
        this.formularioProducto.get('precio')?.value,
        this.formularioProducto.get('cantidadDisponible')?.value,
        this.formularioProducto.get('foto')?.value,
        undefined
      );
      this.productoService.crearProducto(this.producto).subscribe(() => {
        console.log('Producto creado con éxito');
        this.cerrarModalCrear();
      });
    } else {
      console.log('El formulario no es válido');
    }
  }

cerrarModalCrear(): void {
  const modal = document.getElementById('modalCrearProducto');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
}
}