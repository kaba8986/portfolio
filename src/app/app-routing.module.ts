import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressComponent } from './impress/impress.component';
import { MailSentComponent } from './mail-sent/mail-sent.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'impress', component: ImpressComponent },
  { path: '', component: MainComponent },
  { path: 'success', component: MailSentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
