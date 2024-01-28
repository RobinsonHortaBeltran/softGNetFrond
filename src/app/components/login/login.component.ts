import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../Services/services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected user = {
    username: '',
    password: '',
  };

  constructor(private router: Router, private api: ServicesService) {}

  onSubmit() {
    // Aquí puedes agregar tu lógica de autenticación
    // Por ejemplo, puedes validar el usuario y la contraseña
    if (this.user.username != '' && this.user.password != '') {
      const credentials = {
        email: this.user.username,
        password: this.user.password,
      };
      this.api.getLoginToken(credentials).subscribe(
        (response: any) => {
          console.log(response.token);
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('user', JSON.stringify(response.user));
          this.router.navigate(['/home', 'start']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      // Autenticación fallida
      console.error('Inicio de sesión fallido');
    }
  }
}
