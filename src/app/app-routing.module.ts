import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // Define tus rutas aquí
  { path: '', component:LoginComponent },
  { path: 'home', component: HomeComponent },
  {path:'login', component: LoginComponent}
  // ... otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
