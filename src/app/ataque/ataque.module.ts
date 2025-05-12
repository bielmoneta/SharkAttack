import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtaquePageRoutingModule } from './ataque-routing.module';

import { AtaquePage } from './ataque.page';
import { LocalPipe } from '../pipes/local.pipe';
import { IndefinidoPipe } from '../pipes/indefinido.pipe';
import { FatalPipe } from '../pipes/fatal.pipe';
import { CriticoDirective } from '../diretiva/critico.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtaquePageRoutingModule,
    LocalPipe,
    IndefinidoPipe,
    FatalPipe,
    CriticoDirective
],
  declarations: [AtaquePage]
})
export class AtaquePageModule {}
