import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProvaComponent} from './prova/prova.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: ProvaComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
