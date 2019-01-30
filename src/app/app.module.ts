import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { EventService } from './event.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { WeatherService } from './weather.service';
import { HelloComponent } from './charts/hello.component';
//import { UniqueEmailValidatorDirective } from './shared/unique-email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    ChartsComponent,
    HelloComponent
    //UniqueEmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [AuthService, AuthGuard, EventService,WeatherService,
  {
     provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptorService,
     multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
