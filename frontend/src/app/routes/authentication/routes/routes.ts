import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AuthenticationComponent} from "../components/authentication/authentication.component";
/**
 * Created by Daniel on 26.09.2017.
 */
const routes: Routes = [
  {path: '', component: AuthenticationComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
