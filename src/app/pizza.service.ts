import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private httpClient: HttpClient) { }

  public fetchPizzas(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>('https://mamma-mia-pizzas.vercel.app/api/pizza');
  }
}
