import { Injectable } from '@angular/core';
import { Empleado } from '../components/card/card.component';

@Injectable({
  providedIn: 'root'
})
export class TestService {


  private listaEmpleados = [
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

  constructor() { }

  agregarEmpleado(empleado: Empleado){
    this.listaEmpleados.push(empleado)
  }

  obtenerEmpleados(){
    return this.listaEmpleados
  }

}
