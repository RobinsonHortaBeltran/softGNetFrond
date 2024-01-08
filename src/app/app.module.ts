import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StartComponent } from './components/start/start.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { InvoicesComponent } from './components/invoices/invoices.component'; // Asegúrate de importar FormsModule
import { ProfileToolbardComponent } from './components/profile/components/profile-toolbard/profile-toolbard.component';
import { ProfileImageComponent } from './components/profile/components/profile-image/profile-image.component';
import { ProfileFormComponent } from './components/profile/components/profile-form/profile-form.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    StartComponent,
    ProfileComponent,
    TreeViewComponent,
    InvoicesComponent,
    ProfileToolbardComponent,
    ProfileImageComponent,
    ProfileFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
