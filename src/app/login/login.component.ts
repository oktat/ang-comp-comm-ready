import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private builder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  onLogin() {
    if (this.loginForm.valid) {
      this.auth.loginSuccess();
      this.router.navigate(['employee']);
    }
  }

}
