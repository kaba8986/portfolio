import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeGreetingComponent } from './home-greeting/home-greeting.component';
import { ImpressComponent } from './impress/impress.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { TestComponent } from './test/test.component';

import { ScrollToDirective } from './directives/scroll-to.directive';
import { InputValidatorDirective } from './directives/input-validator.directive';
import { MailValidatorDirective } from './directives/mail-validator.directive';
import { MailSentComponent } from './mail-sent/mail-sent.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeGreetingComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    ImpressComponent,
    MainComponent,
    ScrollToDirective,
    FormComponent,
    InputValidatorDirective,
    MailValidatorDirective,
    TestComponent,
    MailSentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
