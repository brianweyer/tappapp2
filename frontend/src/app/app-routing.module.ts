import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { routes } from 'src/app/routes';
import { LoginComponent } from 'src/app/views/login/login.component';
import { KioskComponent } from 'src/app/views/kiosk/kiosk.component';
import { OnTapComponent } from 'src/app/views/on-tap/on-tap.component';
import { BeersComponent } from 'src/app/views/beers/beers.component';
import { BreweriesComponent } from 'src/app/views/breweries/breweries.component';
import { HistoryComponent } from 'src/app/views/history/history.component';
import { NotFoundComponent } from 'src/app/views/not-found/not-found.component';

const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });

@NgModule({
    imports: [
        appRoutes
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
