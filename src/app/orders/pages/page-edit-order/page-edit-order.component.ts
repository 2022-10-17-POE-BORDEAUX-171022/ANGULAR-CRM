import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent {
  public states: string[];
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.states = Object.values(StateOrder);

    // this.form = this.formBuilder.group({
    //   prestaType: [this.order.prestaType],
    //   client: [this.order.client],
    //   nbDays: [this.order.nbDays],
    //   unitPrice: [this.order.unitPrice],
    //   vat: [this.order.vat],
    //   state: [this.order.state],
    //   comment: [this.order.comment],
    //   id: [this.order.id],
    // });
  }

  public onSubmit(): void {}
}
