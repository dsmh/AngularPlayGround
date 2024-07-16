import { Component, OnInit } from '@angular/core';
import { ObservablesService } from '../../services/observables.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule],
  providers: [ObservablesService],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent implements OnInit{
  tiempo = new Observable<string>(
    observer => {
      setInterval(() => {observer.next( new Date().toString())}, 1000);
    }
  )

  constructor(private observable: ObservablesService){}
  ngOnInit(): void {
    
  }
}
