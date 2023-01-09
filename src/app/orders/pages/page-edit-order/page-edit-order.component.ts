import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent {
  public states: string[];
  public form!: FormGroup;
  public id: number;
  public item$: Observable<Order>;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.states = Object.values(StateOrder);
    this.id = this.activatedRoute.snapshot.params['id'];
    this.item$ = this.ordersService.getItemById(this.id).pipe(
      tap((order) => {
        this.form = this.formBuilder.group({
          prestaType: [order.prestaType],
          client: [order.client],
          nbDays: [order.nbDays],
          unitPrice: [order.unitPrice],
          vat: [order.vat],
          state: [order.state],
          comment: [order.comment],
          id: [order.id],
        });
      })
    );
  }

  public onSubmit(): void {
    this.ordersService.update(this.form.value).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
