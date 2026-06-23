import {Routes} from "@angular/router";
import {ImpressComponent} from "./impress/impress.component";
import {MainComponent} from "./main/main.component";
import {MailSentComponent} from "./mail-sent/mail-sent.component";
import {StartScreenComponent} from "./start-screen/start-screen.component";

export const routes: Routes = [
  { path: 'impress', component: ImpressComponent },
  { path: '', component: MainComponent },
  { path: 'success', component: MailSentComponent },
  { path: 'start', component: StartScreenComponent }
];
