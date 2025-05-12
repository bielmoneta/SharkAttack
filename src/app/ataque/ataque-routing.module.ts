import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtaquePage } from './ataque.page';

const routes: Routes = [
  {
    path: '',
    component: AtaquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtaquePageRoutingModule {}
