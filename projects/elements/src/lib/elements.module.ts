import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { DeleteComponent } from './delete/delete.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { NotificationComponent } from './notification/notification.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    DeleteComponent,
    IconComponent,
    ImageComponent,
    NotificationComponent,
    TagComponent
  ],
  exports: [
    ButtonComponent,
    DeleteComponent,
    IconComponent,
    ImageComponent,
    NotificationComponent,
    TagComponent
  ]
})
export class ElementsModule {}
