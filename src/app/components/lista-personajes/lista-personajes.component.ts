import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [
    MaterialModule, 
    HttpClientModule
  ],
  providers: [RickAndMortyService],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.scss'
})
export class ListaPersonajesComponent implements OnInit{

  listaPersonajes: any = {}

  constructor(private RyM: RickAndMortyService){}

  ngOnInit(): void {
   this.RyM.obtenerPersonajes().subscribe({
    next: (data: any) => {
      this.listaPersonajes = data;
      console.log(this.listaPersonajes)
    },
    error: (err: any) => {
      console.log(err);
    }
   })
  }

  siguientePagina(nextUrl: string): void {
    this.RyM.nextPage(nextUrl).subscribe({})
  }

}
