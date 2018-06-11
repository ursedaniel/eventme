import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import {routing} from "./routes/routes";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
