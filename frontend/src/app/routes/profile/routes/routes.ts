import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ProfileComponent} from "../components/profile/profile.component";
/**
 * Created by Daniel on 26.09.2017.
 */
const routes: Routes = [
  {path: '', component: ProfileComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
