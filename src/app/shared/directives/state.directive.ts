import { Directive, HostBinding, Input } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';

@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {}
  ngOnChanges() {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}

// recuperer order.state
// fn qui va generer un nom de class (ex state-canceled)
// binder la propriété class du HostElement td avec ce nom de class
