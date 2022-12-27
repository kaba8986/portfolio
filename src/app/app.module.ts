import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeGreetingComponent } from './home-greeting/home-greeting.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';

import { ScrollToDirective } from './directives/scroll-to.directive';
import { InputValidatorDirective } from './directives/input-validator.directive';
import { MailValidatorDirective } from './directives/mail-validator.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




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
    ImpressumComponent,
    MainComponent,
    ScrollToDirective,
    FormComponent,
    InputValidatorDirective,
    MailValidatorDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
