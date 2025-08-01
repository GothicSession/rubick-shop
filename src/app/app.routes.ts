import {Route} from '@angular/router';
import {MainLayoutComponent} from './containers/main-layout/main-layout.component';
import {Routes} from '@app/shared';

export const appRoutes: Route[] = [
  {
    path: Routes.MAIN,
    component: MainLayoutComponent,
    children: [
      {
        path: Routes.MAIN,
        loadComponent: async () => import('@app/pages').then(m => m.BalanceRefillComponent)
      }
    ]
  }
];
