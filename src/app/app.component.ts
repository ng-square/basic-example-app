import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

@Component({
  standalone: true,
  imports: [RouterModule, PizzaListComponent],
  selector: 'basic-example-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'basic-example-app';
}
