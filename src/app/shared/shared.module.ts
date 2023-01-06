import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GabaritsModule } from '../gabarits/gabarits.module';
import { IconsModule } from '../icons/icons.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective],
  imports: [CommonModule, RouterModule],
  exports: [
    GabaritsModule,
    IconsModule,
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StateDirective,
  ],
})
export class SharedModule {}
