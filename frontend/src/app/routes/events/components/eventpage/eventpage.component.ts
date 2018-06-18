import {Component, OnInit} from '@angular/core';
import {FacebookService, LoginResponse} from 'ngx-facebook';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {isNullOrUndefined} from "util";

// import Codebird = require('../../../../../assets/js/codebird.js');

declare var Codebird;

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})
export class EventpageComponent implements OnInit {


  cb = new Codebird;
  image = new Blob;
  base64textString:string;

  constructor(private fb: FacebookService) {
    // fb.init({
    //   appId: '816481165203943',
    //   version: 'v2.9'
    // });
  }


  ngOnInit() {

  }

  tweet(media) {
    this.cb.setConsumerKey("eZMOgJwcjYAXNHTq3n3ndW83u", "4Ja2Vke57hgP6U23UqLvKjXSenOLyvnMRoaZazLDRP2LFxIpkH");
    this.cb.setToken("2315808678-COGsoFoLxeC77r0JotLkwNEDWP3m5pdtoxqFKzs", "RgvMu6j5OoMT89llzkxeReKuJ0Ucml7zpah4cW23hvzza");

    // let params = "status=" + encodeURIComponent("Am dat tweet sa moara familia");
    // this.cb.__call(
    //   "statuses_update",
    //   params,
    //   function (reply) {
    //     // ...
    //     console.log(reply);
    //   }
    // );

    // let id: any;

    let id:any;


    // let params = {
    //   "media_data": "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB+0lEQVR42mP8//8/Ay0BEwONwagFoxZQDljI0PP8x7/Z93/e+PxXmpMpXp5dh4+ZgYHh0bd/clxYnMuINaMtfvRLgp3RVZwVU+rkuz+eRz+//wXVxcrEkKnEceXTX0dRlhoNTmKDaOvzXwHHv6x9+gtN/M9/hpjTX+GmMzAw/P7HMOnOj+ff//35x/Ds+z9iLfjPwPDt7//QE1/Sz319/RNh3PkPf+58+Yup/t7Xf9p8zFKcTMRa4CLGCrFm1v2fSjs+pJ/7uuvl7w+//yO7HRkUq3GEyrCREMk+kqy2IiyH3/xhYGD48uf/rPs/Z93/yczIwM3CiFU9Hw5xnD4ouvTt4Tf0AP37n+HTb+w+UOBmIs2CICm2R9/+EZlqGRkYzIVYSLMgRIYtUYGdSAsMBFgUuJhIy2iMDAwt2pysjAwLHv78RcgnOcrs5BQVHEyMG579Imi6Nh9zrBxZFgixMW624pXnwldYcTAzLjDhZmUit7AzE2K54c7fp8eF1QhWRobFptwmgiwkF3b//jMwMjJ8+P3/zPs/yx/9Wvr412+MgBJlZ1xsyuOOrbAibMHH3/87b32fce/nR2ypnpuFMVGevU6TQ5SdqKKeEVez5cuf/7te/j727s+9L/++/v3PzcyowM1kIcTiLs7Kz8pIfNnOONouGrVg1AIGAJ6gvN4J6V9GAAAAAElFTkSuQmCC"
    // };

    let params = {
      "media_data": media
    };
    this.cb.__call(
      "media_upload",
      params,
      function (reply, rate, err) {
        // you get a media id back:
        console.log(reply.media_id_string);

        id = reply.media_id_string;

        // cont inue upload of 2nd image here, if any (just 1 image works, too!)

      }
    );

    setTimeout(() => {
      this.cb.__call(
        "statuses_update",
        {
          "media_ids": id,
          "status": "Whohoo, I just tweeted two images!"
        },
        function (reply, rate, err) {
          console.log(reply);
          // ...
        }
      );

    }, 4000);


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

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString = btoa(e.target.result);
    this.tweet(this.base64textString);
  }
}
