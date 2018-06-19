import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserteventComponent } from './components/insertevent/insertevent.component';
import {routing} from './routes/routes';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [InserteventComponent]
})
export class InserteventModule { }
