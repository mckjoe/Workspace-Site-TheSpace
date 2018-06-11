import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { ContactComponent } from './contact/contact.component';
import { LocationsComponent } from './locations/locations.component';
import { MissionComponent } from './mission/mission.component';
import { PlansComponent } from './plans/plans.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AmenitiesComponent,
    ContactComponent,
    LocationsComponent,
    MissionComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
