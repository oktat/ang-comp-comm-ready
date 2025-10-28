import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject(false);
  isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private router: Router) { }

  loginSuccess() {
    this._isAuthenticated.next(true);
  }

  logout() {
    this._isAuthenticated.next(false);
    this.router.navigate(['home']);
  }
}
