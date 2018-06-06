import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./routes/dashboard/components/dashboard/dashboard.component";

export const routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  // Not lazy-loaded routes
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // {path: 'recover', component: RecoverComponent},
  // {path: 'lock', component: LockComponent},
  // {path: 'maintenance', component: MaintenanceComponent},
  // {path: '404', component: Error404Component},
  // {path: '500', component: Error500Component},

  // Not found
  {path: '**', component: DashboardComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
