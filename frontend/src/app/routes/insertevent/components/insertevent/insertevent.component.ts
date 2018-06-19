import { Component, OnInit } from '@angular/core';
import {FacebookService, LoginResponse} from 'ngx-facebook';

declare var Codebird;


@Component({
  selector: 'app-insertevent',
  templateUrl: './insertevent.component.html',
  styleUrls: ['./insertevent.component.css']
})
export class InserteventComponent implements OnInit {


  cb = new Codebird;
  image = new Blob;
  base64textString:string;
  tweetId: number;
  fileName: string = "No file selected";
  steps = [
    {active: true, completed: true, name: "Details"},
    {active: false, completed: false, name: "Form"},
    {active: false, completed: false, name: "Payment"},
    {active: false, completed: false, name: "Finish"},
  ];

  cardnumber: any;
  expiration: any;
  cvc: any;

  questionTypes = [
    "Short answer",
    "Paragraph",
    "Multiple choices",
    "Checkboxes",
    "Dropdown"
  ];

  constructor(private fb: FacebookService) {
    // fb.init({
    //   appId: '816481165203943',
    //   version: 'v2.9'
    // });
  }


  ngOnInit() {

  }

  addMedia(media) {

    let id:any;

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
     this.tweetId = id;

    }, 4000);


  }

  tweet() {
    this.cb.setConsumerKey("eZMOgJwcjYAXNHTq3n3ndW83u", "4Ja2Vke57hgP6U23UqLvKjXSenOLyvnMRoaZazLDRP2LFxIpkH");
    this.cb.setToken("2315808678-COGsoFoLxeC77r0JotLkwNEDWP3m5pdtoxqFKzs", "RgvMu6j5OoMT89llzkxeReKuJ0Ucml7zpah4cW23hvzza");

    this.cb.__call(
      "statuses_update",
      {
        "media_ids": this.tweetId,
        "status": "Whohoo, I just tweeted two images!"
      },
      function (reply, rate, err) {
        console.log(reply);
        // ...
      }
    );
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

    this.fileName = file.name;

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString = btoa(e.target.result);
    this.addMedia(this.base64textString);
  }

  changeStep(index) {
    // for(let i = 0; i < this.steps.length; i++) {
    //   this.steps[i].active = false;
    // }
    this.steps.find(item => item.active == true).active = false;
    this.steps[index].active = true;

  }
}
