import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.builder.group({
    username: ['admin'],
    password: ['titok']
  });

  constructor(private builder: FormBuilder) { }

  onLogin() {
    console.log('Bejelentkezés árnyékeljárás...');
  }

}
