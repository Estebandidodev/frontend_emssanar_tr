import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {

  formularioCliente: FormGroup = new FormGroup({});
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.formularioCliente = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      correoElectronico: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required)
    });
  }

  guardarCliente(): void {
    
    console.log('this.formularioCliente', this.formularioCliente)
    if (this.formularioCliente.valid) {
      const cliente = this.formularioCliente.value;
      console.log(cliente);
      this.clienteService.crearCliente(cliente).subscribe(clientes => {
        this.cerrarModalCrear()
      });
      // Aquí puedes agregar la lógica para guardar el cliente en tu base de datos
    } else {
      console.log('El formulario no es válido');
    }
  }
cerrarModalCrear(): void {
  const modal = document.getElementById('modalCrearCliente');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
}

}