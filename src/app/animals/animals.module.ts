import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { CatsComponent } from './cats/cats.component';
import { CaesComponent } from './caes/caes.component';
import { BirdsComponent } from './birds/birds.component';

@NgModule({
  declarations: [CatsComponent, CaesComponent, BirdsComponent],
  imports: [CommonModule, AnimalsRoutingModule],
  //exports: [CatsComponent],
})
export class AnimalsModule {}
