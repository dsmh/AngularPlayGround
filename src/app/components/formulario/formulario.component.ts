import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    FormsModule, 
    MaterialModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  nombreAsistente = '';
  listaAsistentes: string[] = []

  guardarFormulario(){
    this.listaAsistentes.push(this.nombreAsistente)
    console.log(this.listaAsistentes)
  }
}
