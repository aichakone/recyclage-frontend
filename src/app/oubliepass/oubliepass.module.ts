import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OubliepassPageRoutingModule } from './oubliepass-routing.module';

import { OubliepassPage } from './oubliepass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OubliepassPageRoutingModule
  ],
  declarations: [OubliepassPage]
})
export class OubliepassPageModule {}
