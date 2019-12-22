import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestDirective } from './test.directive';
import { InjectedComponent } from './injected/injected.component';
import { AnotherInjectedComponent } from './another-injected/another-injected.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    InjectedComponent,
    AnotherInjectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ InjectedComponent, AnotherInjectedComponent ]
})
export class AppModule { }
