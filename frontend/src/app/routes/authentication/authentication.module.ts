import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {FormsModule} from "@angular/forms";
import {routing} from "./routes/routes";
import {AuthService} from "./services/auth.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    AuthenticationComponent
  ],
  providers: [
  ]
})
export class AuthenticationModule { }
