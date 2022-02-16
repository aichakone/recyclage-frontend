import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OubliepassPage } from './oubliepass.page';

const routes: Routes = [
  {
    path: '',
    component: OubliepassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OubliepassPageRoutingModule {}
