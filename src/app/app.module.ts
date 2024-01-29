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
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Add this import
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehicleFormComponent } from './components/vehicles/Components/vehicle-form/vehicle-form.component';
import { VehicleToolbardComponent } from './components/vehicles/Components/vehicle-toolbard/vehicle-toolbard.component';
import { VehiclesTableComponent } from './components/vehicles/Components/vehicles-table/vehicles-table.component';
import { RoutesDComponent } from './components/routesD/routesD.component';
import { RoutesFormComponent } from './components/routesD/Components/routes-form/routes-form.component';
import { RoutesTableComponent } from './components/routesD/Components/routes-table/routes-table.component';
import { RoutesToolbardComponent } from './components/routesD/Components/routes-toolbard/routes-toolbard.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { ScheduleFormComponent } from './components/schedules/Components/schedule-form/schedule-form.component';
import { ScheduleToolbardComponent } from './components/schedules/Components/schedule-toolbard/schedule-toolbard.component';
import { SchedulesTableComponent } from './components/schedules/Components/schedules-table/schedules-table.component';
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
    VehiclesComponent,
    VehicleFormComponent,
    VehicleToolbardComponent,
    VehiclesTableComponent,
    RoutesDComponent,
    RoutesFormComponent,
    RoutesTableComponent,
    RoutesToolbardComponent,
    SchedulesComponent,
    ScheduleFormComponent,
    ScheduleToolbardComponent,
    SchedulesTableComponent
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
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    // Replace MatSnackBar with MatSnackBarModule
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
