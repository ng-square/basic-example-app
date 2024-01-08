import { Component, OnInit, Signal, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListItemComponent } from '../pizza-list-item/pizza-list-item.component';
import { Order, Pizza } from '../model';
import { BalHeading } from '@baloise/design-system-components-angular/standalone';
import { PizzaService } from '../pizza.service';
import { Observable } from 'rxjs';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'basic-example-app-pizza-list',
  standalone: true,
  imports: [CommonModule, PizzaListItemComponent, BalHeading, OrderComponent],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss',
})
export class PizzaListComponent implements OnInit {

  constructor(private pizzaService: PizzaService) {}

  pizzas: Observable<Pizza[]> | undefined;
  order: WritableSignal<Order | undefined> = signal(undefined);

  ngOnInit(): void {
    this.pizzas = this.pizzaService.fetchPizzas();
  }

  changeOrder(pizza: Pizza) {
    this.order.update(order => {
      return {
        ...order,
        pizzas: [...(order?.pizzas || []), pizza]
      };
    });
  }

  submitOrder(): void {
    alert('Your Pizzas are on their way...');
    this.order.update(() => undefined);
  }
}
