import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmenitiesComponent } from './amenities/amenities.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LocationsComponent } from './locations/locations.component';
import { MissionComponent } from './mission/mission.component';
import { PlansComponent } from './plans/plans.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'amenities',
    component: AmenitiesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'mission',
    component: MissionComponent
  },
  {
    path: 'plans',
    component: PlansComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
