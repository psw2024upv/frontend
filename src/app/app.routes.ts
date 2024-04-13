import { Routes } from '@angular/router';
import { LogInComponent } from './login/log-in.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'',
        component: AppComponent

    },
    {
        path: 'inicio-sesion',
        component: LogInComponent
    }
];
