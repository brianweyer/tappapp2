import { LoginComponent } from 'src/app/views/login/login.component';
import { KioskComponent } from 'src/app/views/kiosk/kiosk.component';
import { AppComponent } from 'src/app/app.component';
import { Routes } from '@angular/router/src/config';
import { OnTapComponent } from 'src/app/views/on-tap/on-tap.component';
import { BeersComponent } from 'src/app/views/beers/beers.component';
import { BreweriesComponent } from 'src/app/views/breweries/breweries.component';
import { HistoryComponent } from 'src/app/views/history/history.component';
import { NotFoundComponent } from 'src/app/views/not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'kiosk',
        component: KioskComponent,
        pathMatch: 'full'
    },
    {
        path: 'on-tap',
        component: OnTapComponent,
        pathMatch: 'full'
    },
    {
        path: 'beers',
        component: BeersComponent,
        pathMatch: 'full'
    },
    {
        path: 'breweries',
        component: BreweriesComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'history',
        component: HistoryComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'kiosk',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
