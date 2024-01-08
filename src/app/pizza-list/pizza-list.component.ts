import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'basic-example-app-pizza-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss',
})
export class PizzaListComponent {}
