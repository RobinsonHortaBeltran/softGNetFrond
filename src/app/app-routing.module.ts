import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { ProfileComponent } from './components/profile/profile.component';
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
        path: 'profile',
        component: ProfileComponent,
      },
      // Agrega más rutas internas si es necesario
    ],
  },
  //{ path: 'start', component: StartComponent },

  // Agrega más rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
