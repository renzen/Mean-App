import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from 'src/app/special-events/special-events.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { ChartsComponent } from 'src/app/charts/charts.component'
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
{
   path: '',
   redirectTo: 'home',
   pathMatch: 'full'
},
{
  path: 'events',
  component: EventsComponent,
  canActivate: [AuthGuard]
},
{
  path: 'special',
  component: SpecialEventsComponent,
  canActivate: [AuthGuard]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'charts',
  component: ChartsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
