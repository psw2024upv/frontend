import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LogInComponent } from './log-in.component';

export const routesL: Routes = [
    {
        path:'',
        component: LogInComponent
    },
    {
        path: 'registrarse',
        component: AppComponent
    }
];