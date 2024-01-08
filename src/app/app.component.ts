import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PizzaShopComponent } from './pizza-shop/pizza-shop.component';

@Component({
  standalone: true,
  imports: [RouterModule, PizzaShopComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'basic-example-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'basic-example-app';
}
