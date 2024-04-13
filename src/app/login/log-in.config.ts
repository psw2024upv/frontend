import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routesL } from './log-in.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfigL: ApplicationConfig = {
  providers: [provideRouter(routesL), provideClientHydration()]
};