import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { LogInComponent } from './app/login/log-in.component';
import {configL } from './app/login/log-in.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;
