import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { TestService } from '../../services/test.service';
import { Empleado } from '../card/card.component';
import { ListadoEmpleadosComponent } from '../listado-empleados/listado-empleados.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    FormsModule, 
    MaterialModule,
    ListadoEmpleadosComponent
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit{

  listaEmpleados: Empleado[] =[];
  nombreEmpleado = '';
  ocupacion = '';

  constructor(private testService: TestService){}
  ngOnInit(): void {
    this.listaEmpleados = this.testService.obtenerEmpleados();
  }


  guardarFormulario(){
   this.testService.agregarEmpleado({
    nombre: this.nombreEmpleado,
    ocupacion: this.ocupacion
   })
   this.listaEmpleados = this.testService.obtenerEmpleados();
  }
}
