import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'impress', component: ImpressumComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
