import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(homeRoutes), SharedModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: []
})

export class HomeModule { }