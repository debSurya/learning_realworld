import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import {
  SharedModule,
  HeaderComponent,
  FooterComponent
} from './shared';

import { UserService } from './shared/services/user.service';
import { ApiService } from './shared/services/api.service';

const rootRouting = [];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AuthModule,
    RouterModule.forRoot(rootRouting, {
      useHash: true
    })
  ],
  providers: [
    UserService, ApiService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { };