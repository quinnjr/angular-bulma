import { Injectable } from '@angular/core';

import { IBulmaAlert } from './alert';

export interface IBulmaAlertService {
  add(alert: IBulmaAlert): void;
  delete(id: number): void;
  clear(): void;
  keys(): unknown;
  values(): unknown;
}

@Injectable({
  providedIn: 'root'
})
export class BulmaDefaultAlertService implements IBulmaAlertService {
  private alerts: Array<IBulmaAlert> = [];

  constructor() {}

  public add(alert: IBulmaAlert): void {
    this.alerts.push(alert);
  }

  public delete(id: number): void {
    this.alerts.splice(id);
  }

  public clear(): void {
    this.alerts.splice(0, this.alerts.length - 1);
  }

  public keys(): IterableIterator<number> {
    return this.alerts.keys();
  }

  public values(): IterableIterator<IBulmaAlert> {
    return this.alerts.values();
  }
}
