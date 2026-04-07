import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private auth: AuthService, private router: Router){}

  login() {
    this.auth.loginFake();
    this.router.navigate(['']);
  }
}
