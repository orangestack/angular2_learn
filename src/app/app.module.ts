import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitItemComponent } from './fruit-item/fruit-item.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { HttpComponent } from './http/http.component';
import { RouteMainComponent } from './route-main/route-main.component';
import { MobileRouteComponent } from './mobile-route/mobile-route.component';
import { TabletRouteComponent } from './tablet-route/tablet-route.component';
import { DesktopRouteComponent } from './desktop-route/desktop-route.component';

const routes: Routes = [
  { path: 'mobile-route', component: MobileRouteComponent },
  { path: 'tablet-route', component: TabletRouteComponent },
  { path: 'desktop-route', component: DesktopRouteComponent }]  ;

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    FruitItemComponent,
    FruitListComponent,
    CountriesListComponent,
    HttpComponent,
    RouteMainComponent,
    MobileRouteComponent,
    TabletRouteComponent,
    DesktopRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(routes) //Routes
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: APP_BASE_HREF, useValue: '/' }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }