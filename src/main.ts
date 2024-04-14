import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LogInComponent } from './app/login/log-in.component';
import { appConfigL } from './app/login/log-in.config';
import { routes } from './app/app.routes';
import { routesL } from './app/login/log-in.routes';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
