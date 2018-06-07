import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardComponent} from "../components/dashboard/dashboard.component";
/**
 * Created by Daniel on 26.09.2017.
 */
const routes: Routes = [
  {path: '', component: DashboardComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
