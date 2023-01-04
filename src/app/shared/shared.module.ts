import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GabaritsModule } from '../gabarits/gabarits.module';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [GabaritsModule, IconsModule],
})
export class SharedModule {}
