import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {EventsComponent} from '../components/events/events.component';
/**
 * Created by Daniel on 26.09.2017.
 */
const routes: Routes = [
  {path: '', component: EventsComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
