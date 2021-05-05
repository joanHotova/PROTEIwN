import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = 'admin';

  errorMessage = 'Your username or password is incorrect. Please try again.';
  invalidLogin = false;
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['/']);
      this.invalidLogin = false;
    }
    this.invalidLogin = true;
  }
}
