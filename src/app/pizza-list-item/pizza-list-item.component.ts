import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalButtonBundle, BalCardBundle, BalLayoutBundle } from '@baloise/design-system-components-angular/standalone';
import { Pizza } from '../model';

@Component({
  selector: 'basic-example-app-pizza-list-item',
  standalone: true,
  imports: [CommonModule, BalCardBundle, BalButtonBundle],
  templateUrl: './pizza-list-item.component.html',
  styleUrl: './pizza-list-item.component.scss',
})
export class PizzaListItemComponent {

  @Input()
  pizza: Pizza | undefined;

  @Output()
  order = new EventEmitter<Pizza>();

}
