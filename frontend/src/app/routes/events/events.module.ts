import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './components/events/events.component';
import {routing} from './routes/routes';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [EventsComponent]
})
export class EventsModule { }
