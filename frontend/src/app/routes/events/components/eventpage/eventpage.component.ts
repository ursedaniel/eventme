import { Component, OnInit } from '@angular/core';
import {FacebookService, LoginResponse} from 'ngx-facebook';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})
export class EventpageComponent implements OnInit {

  constructor(private fb: FacebookService) {
    fb.init({
      appId: '816481165203943',
      version: 'v2.9'
    });
  }

  ngOnInit() {

  }

  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

  logout() {
    this.fb.logout().then(() => console.log('Logged out!'));
  }

  private handleError(error) {
    console.error('Error processing action', error);
  }


}
