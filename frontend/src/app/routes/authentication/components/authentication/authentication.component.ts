import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  checked = false;
  user: User = new User();

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.user).subscribe(
      (succes) => {
        localStorage.setItem('userId', succes.toString());
        this.router.navigateByUrl('/profile');
        this.auth.setLogged(true);
      },
      (error) => {
        alert('error');
      }
    )
  }


}
