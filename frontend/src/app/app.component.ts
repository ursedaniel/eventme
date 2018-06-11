import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {AuthService} from "./routes/authentication/services/auth.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  isLogged: boolean;
  subscription: Subscription;

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.subscription = this.auth.isLogged.subscribe(
      (response) => {
        this.isLogged = response;
      }
    );
    if (!isNullOrUndefined(localStorage.getItem('userId'))) {
      this.auth.setLogged(true);
    }
  }
}
