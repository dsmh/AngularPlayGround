import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  constructor() { }

  time = new Observable<string>(
    observer => {
      setInterval(() => {observer.next( new Date().toString())}, 1000);
    }
  )
}
