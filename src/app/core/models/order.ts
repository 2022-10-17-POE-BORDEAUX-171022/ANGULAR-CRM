import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  public unitPrice = 500;
  public nbDays = 5;
  public vat = 20;
  public state = StateOrder.OPTION;
  public prestaType!: string;
  public client!: string;
  public comment!: string;
  public id!: number;
}
