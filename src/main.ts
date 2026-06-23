import {importProvidersFrom} from '@angular/core';
import {AppRoutingModule} from './app/app-routing.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app/app.component';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppRoutingModule, BrowserModule, FormsModule, NoopAnimationsModule, ReactiveFormsModule),
        { provide: Window, useValue: window }
    ]
})
  .catch(err => console.error(err));
