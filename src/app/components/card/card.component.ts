import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { InputComponent } from '../input/input.component';
import { MaterialModule } from '../../material/material.module';

export interface Empleado {
  nombre: string
  ocupacion: string
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    InputComponent,
    MaterialModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  mensajeDelHijo = ''

  listaEmpleados = [
    {
      nombre: 'Carlos',
      ocupacion: 'programador'
    },
    {
      nombre: 'Andres',
      ocupacion: 'Backend developer'
    },
    {
      nombre: 'Carolina',
      ocupacion: 'Programadora'
    },
    {
      nombre: 'Andrea',
      ocupacion: 'Frontend developer'
    },
  ]

  onEmit(mensaje: string) {
    this.mensajeDelHijo = mensaje
  }

}
