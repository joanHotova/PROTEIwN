import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
    this.router.navigate(['/login']);
  }

}
