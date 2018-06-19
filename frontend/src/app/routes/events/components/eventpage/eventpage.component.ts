import {Component, OnInit} from '@angular/core';
import {FacebookService, LoginResponse} from 'ngx-facebook';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {isNullOrUndefined} from "util";

// import Codebird = require('../../../../../assets/js/codebird.js');


@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})
export class EventpageComponent implements OnInit {


  constructor() {

  }


  ngOnInit() {

  }

}
