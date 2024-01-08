import { Route } from '@angular/router';
import { PizzaShopComponent } from './pizza-shop/pizza-shop.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Route[] = [
    {path: 'pizzas', component: PizzaShopComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '', pathMatch: 'full', redirectTo: 'pizzas'},
    {path: '**', redirectTo: 'not-found'}
];
