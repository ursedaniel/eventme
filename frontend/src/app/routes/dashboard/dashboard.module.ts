import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {routing} from "./routes/routes";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
