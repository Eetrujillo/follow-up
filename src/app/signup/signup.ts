import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para directivas básicas
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // <--- ESTO ES LO QUE FALTA

@Component({
  selector: 'app-signup',
  standalone: true, // Asegúrate de que esto esté en true si es un componente standalone
  imports: [
    CommonModule, 
    ReactiveFormsModule // <--- AGREGA ESTO AQUÍ
  ],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
  }
}