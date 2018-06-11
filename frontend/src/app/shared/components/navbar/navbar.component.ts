import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {AuthService} from "../../../routes/authentication/services/auth.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  subscription: Subscription;
  isLogged: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.subscription = this.auth.isLogged.subscribe(
      (response) => {
        this.isLogged = response;
      }
    );
    if (!isNullOrUndefined(localStorage.getItem('userId'))) {
      this.auth.setLogged(true);
      // this.isLogged = true;
    }
  }

  logout() {
    this.auth.setLogged(false);
    localStorage.removeItem('userId');
  }

}
