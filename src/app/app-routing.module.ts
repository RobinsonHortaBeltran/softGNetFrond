import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { RoutesDComponent } from './components/routesD/routesD.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'start',
        component: StartComponent,
      },
      {
        path:'drivers',
        component:DriversComponent,
      },
      {
        path: 'routes',
        component: RoutesDComponent,
      },
      {
        path: 'vehicles',
        component: VehiclesComponent,
      },
      {
        path: 'schedule',
        component: SchedulesComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
