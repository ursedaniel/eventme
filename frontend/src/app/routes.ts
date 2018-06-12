import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";

export const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './routes/dashboard/dashboard.module#DashboardModule'},
  {path: 'auth', loadChildren: './routes/authentication/authentication.module#AuthenticationModule'},
  {path: 'profile', loadChildren: './routes/profile/profile.module#ProfileModule'},
  {path: 'events', loadChildren: './routes/events/events.module#EventsModule'},
  // Not lazy-loaded routes
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // {path: 'recover', component: RecoverComponent},
  // {path: 'lock', component: LockComponent},
  // {path: 'maintenance', component: MaintenanceComponent},
  // {path: '404', component: Error404Component},
  // {path: '500', component: Error500Component},

  // Not found
  {path: '**',redirectTo: 'home', pathMatch: 'full'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
