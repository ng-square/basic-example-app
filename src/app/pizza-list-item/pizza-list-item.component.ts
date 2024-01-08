import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'basic-example-app-pizza-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-list-item.component.html',
  styleUrl: './pizza-list-item.component.scss',
})
export class PizzaListItemComponent {}
