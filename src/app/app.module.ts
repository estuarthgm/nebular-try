import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomePageComponent } from './components/some-page/some-page.component';
//nebular imports
import { NbThemeModule,
          NbSidebarModule, 
          NbLayoutModule, 
          NbButtonModule, 
          NbIconModule,
          NbCardModule,
          NbStepperModule,
          NbAccordionModule,
          NbListModule,
          NbMenuModule,
          NbTabsetModule,
          NbActionsModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAuthModule } from '@nebular/auth';
import { NbSecurityModule } from '@nebular/security';


@NgModule({
  declarations: [
    AppComponent,
    SomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbStepperModule,
    NbAccordionModule,
    NbListModule,
    NbTabsetModule,
    NbActionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
