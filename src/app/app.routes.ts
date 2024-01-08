import { Route } from '@angular/router';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Route[] = [
    {path: 'pizzas', component: PizzaListComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '', pathMatch: 'full', redirectTo: 'pizzas'},
    {path: '**', redirectTo: 'not-found'}
];
