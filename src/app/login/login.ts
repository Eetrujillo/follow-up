import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';   

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  constructor(private router: Router) { }
  goToSignup() {
    console.log("kwjnvkjen")
    this.router.navigate(['/signup'])
  }
}

