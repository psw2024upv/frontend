import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { LogInComponent } from './app/login/log-in.component';
import {configL } from './app/login/log-in.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
