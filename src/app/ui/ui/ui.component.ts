import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent {
  public open = true;

  public toggle() {
    this.open = !this.open;
  }
}
