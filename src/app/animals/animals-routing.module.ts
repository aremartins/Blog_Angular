import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { BirdsComponent } from './birds/birds.component';
import { CaesComponent } from './caes/caes.component';
import { CatsComponent } from './cats/cats.component';

const routes: Routes = [
  { path:'animals/cats', component: CatsComponent },
  { path: 'animals/caes', component: CaesComponent },
  { path: 'animals/birds', component: BirdsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
