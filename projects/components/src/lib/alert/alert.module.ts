import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulmaAlertComponent } from './alert.component';
import { BulmaDefaultAlertService, IBulmaAlertService } from './alert.service';

export const BULMA_ALERT_SERVICE = new InjectionToken('bu-alert-service');

@NgModule({
  imports: [CommonModule],
  declarations: [BulmaAlertComponent]
})
export class BulmaAlertModule {
  public forRoot(config?: {
    service: IBulmaAlertService;
  }): ModuleWithProviders<BulmaAlertModule> {
    return {
      ngModule: BulmaAlertModule,
      providers: [
        {
          provide: BULMA_ALERT_SERVICE,
          useClass: (config?.service as any) || BulmaDefaultAlertService
        }
      ]
    };
  }
}
