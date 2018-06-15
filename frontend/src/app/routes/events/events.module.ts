import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './components/events/events.component';
import {routing} from './routes/routes';
import { EventpageComponent } from './components/eventpage/eventpage.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    EventsComponent,
    EventpageComponent
  ]
})
export class EventsModule { }
