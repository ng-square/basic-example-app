import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PizzaShopComponent } from './pizza-shop/pizza-shop.component';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { onBalConfigChange, BalConfigState } from '@baloise/design-system-components'

@Component({
  standalone: true,
  imports: [RouterModule, PizzaShopComponent, TranslocoModule, TranslocoModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'basic-example-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  constructor(private transloco: TranslocoService) {}

  ngOnInit(): void {
    onBalConfigChange((config: BalConfigState) => {
      this.transloco.setActiveLang(config.language)
    })
   }

}
