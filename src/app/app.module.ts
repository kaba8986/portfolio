import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeGreetingComponent } from './home-greeting/home-greeting.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { ScrollToDirective } from './directives/scroll-to.directive';




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
    ScrollToDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
