import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {InserteventComponent} from '../components/insertevent/insertevent.component';
/**
 * Created by Daniel on 26.09.2017.
 */
const routes: Routes = [
  {path: '', component: InserteventComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
