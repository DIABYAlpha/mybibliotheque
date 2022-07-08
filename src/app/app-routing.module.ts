import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterunlivreComponent } from './composants/ajouterunlivre/ajouterunlivre.component';
import { HomeComponent } from './composants/home/home.component';
import { LivresComponent } from './composants/livres/livres.component';

const routes: Routes = [
  { path:'ajouterunlivre', component: AjouterunlivreComponent},
  { path: 'livres', component: LivresComponent}, 
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
