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

import { ProfileToolbardComponent } from './components/profile/components/profile-toolbard/profile-toolbard.component';
import { ProfileImageComponent } from './components/profile/components/profile-image/profile-image.component';
import { ProfileFormComponent } from './components/profile/components/profile-form/profile-form.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from "@angular/material/input";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DriversToolbarComponent } from './components/drivers/Components/drivers-toolbar/drivers-toolbar.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverFormComponent } from './components/drivers/Components/driverForm/driverForm.component';
import { TableDriversComponent } from './components/drivers/Components/table-drivers/table-drivers.component';
import { TokenInterceptor } from './Services/Interceptors/token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    StartComponent,
    ProfileComponent,
    ProfileToolbardComponent,
    ProfileImageComponent,
    ProfileFormComponent,
    DriversComponent,
    DriversToolbarComponent,
    DriverFormComponent,
    TableDriversComponent,
    // DriversToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule, // Replace DriversComponent with MatPaginatorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
