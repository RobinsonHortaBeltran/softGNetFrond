import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

protected  user = {
    username: '',
    password: ''
  };
  
  constructor(private router: Router) { }
  
  onSubmit() {
    // Aquí puedes agregar tu lógica de autenticación
    // Por ejemplo, puedes validar el usuario y la contraseña
    if (this.user.username === 'admin' && this.user.password === '123') {
      // Autenticación exitosa
     this.router.navigate(['/home','start'])
    } else {
      // Autenticación fallida
      console.error('Inicio de sesión fallido');
    }
  }
  
}
