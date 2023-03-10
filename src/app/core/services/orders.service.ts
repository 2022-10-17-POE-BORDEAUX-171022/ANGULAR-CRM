import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { StateOrder } from '../enums/state-order';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private urlApi: string;
  public collection$: BehaviorSubject<Order[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = new BehaviorSubject<Order[]>([]);

    this.refreshCollection();
    // console.log(this.collection$);
  }

  public refreshCollection() {
    this.httpClient.get<Order[]>(`${this.urlApi}/orders`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  // change state order
  public changeState(order: Order, state: StateOrder): Observable<Order> {
    const item = new Order(order);
    item.state = state;
    return this.update(item);
  }

  // update order
  public update(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(
      `${this.urlApi}/orders/${order.id}`,
      order
    );
  }

  public add(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.urlApi}/orders`, order);
  }

  public getItemById(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  public delete(id: number): Observable<Order> {
    return this.httpClient
      .delete<Order>(`${this.urlApi}/orders/${id}`)
      .pipe(tap(() => this.refreshCollection()));
  }
}
