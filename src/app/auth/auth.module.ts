import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared';

import { AuthComponent } from './auth.component';

const authRoutes: Routes = [
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: 'register',
        component: AuthComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(authRoutes),
        SharedModule
    ],
    declarations: [
        AuthComponent
    ],
    providers: []
})

export class AuthModule {}