import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h2>Pantalla de Login</h2>
    <form>
      <label for="username">Usuario:</label>
      <input id="username" type="text" />

      <label for="password">Contraseña:</label>
      <input id="password" type="password" />

      <button type="submit">Ingresar</button>
    </form>
  `
})
export class Login {}
