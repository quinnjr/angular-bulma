import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BulmaIsBlockDirective,
  BulmaIsFlexDirective,
  BulmaIsInlineDirective,
  BulmaIsInlineBlockDirective,
  BulmaIsInlineFlexDirective
} from './show.directive';

import {
  BulmaIsBlockMobileDirective,
  BulmaIsBlockTabletOnlyDirective,
  BulmaIsBlockDesktopOnlyDirective,
  BulmaIsBlockWidescreenOnlyDirective,
  BulmaIsBlockTouchDirective,
  BulmaIsBlockTabletDirective,
  BulmaIsBlockDesktopDirective,
  BulmaIsBlockWidescreenDirective,
  BulmaIsBlockFullhdDirective,
  BulmaIsFlexMobileDirective,
  BulmaIsFlexTabletOnlyDirective,
  BulmaIsFlexDesktopOnlyDirective,
  BulmaIsFlexWidescreenOnlyDirective,
  BulmaIsFlexTouchDirective,
  BulmaIsFlexTabletDirective,
  BulmaIsFlexDesktopDirective,
  BulmaIsFlexWidescreenDirective,
  BulmaIsFlexFullhdDirective,
  BulmaIsInlineMobileDirective,
  BulmaIsInlineTabletOnlyDirective,
  BulmaIsInlineDesktopOnlyDirective,
  BulmaIsInlineWidescreenOnlyDirective,
  BulmaIsInlineTouchDirective,
  BulmaIsInlineTabletDirective,
  BulmaIsInlineDesktopDirective,
  BulmaIsInlineWidescreenDirective,
  BulmaIsInlineFullhdDirective,
  BulmaIsInlineBlockMobileDirective,
  BulmaIsInlineBlockTabletOnlyDirective,
  BulmaIsInlineBlockDesktopOnlyDirective,
  BulmaIsInlineBlockWidescreenOnlyDirective,
  BulmaIsInlineBlockTouchDirective,
  BulmaIsInlineBlockTabletDirective,
  BulmaIsInlineBlockDesktopDirective,
  BulmaIsInlineBlockWidescreenDirective,
  BulmaIsInlineBlockFullhdDirective,
  BulmaIsInlineFlexMobileDirective,
  BulmaIsInlineFlexTabletOnlyDirective,
  BulmaIsInlineFlexDesktopOnlyDirective,
  BulmaIsInlineFlexWidescreenOnlyDirective,
  BulmaIsInlineFlexTouchDirective,
  BulmaIsInlineFlexTabletDirective,
  BulmaIsInlineFlexDesktopDirective,
  BulmaIsInlineFlexWidescreenDirective,
  BulmaIsInlineFlexFullhdDirective
} from './show-responsive.directive';

import {
  BulmaIsHiddenMobileDirective,
  BulmaIsHiddenTabletOnlyDirective,
  BulmaIsHiddenDesktopOnlyDirective,
  BulmaIsHiddenWidescreenOnlyDirective,
  BulmaIsHiddenTouchDirective,
  BulmaIsHiddenTabletDirective,
  BulmaIsHiddenDesktopDirective,
  BulmaIsHiddenWidescreenDirective,
  BulmaIsHiddenFullhdDirective
} from './hide.directive';

import {
  BulmaIsInvisibleDirective,
  BulmaIsHiddenDirective,
  BulmaIsSrOnlyDirective
} from './other.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BulmaIsBlockDirective,
    BulmaIsFlexDirective,
    BulmaIsInlineDirective,
    BulmaIsInlineBlockDirective,
    BulmaIsInlineFlexDirective,
    BulmaIsBlockMobileDirective,
    BulmaIsBlockTabletOnlyDirective,
    BulmaIsBlockDesktopOnlyDirective,
    BulmaIsBlockWidescreenOnlyDirective,
    BulmaIsBlockTouchDirective,
    BulmaIsBlockTabletDirective,
    BulmaIsBlockDesktopDirective,
    BulmaIsBlockWidescreenDirective,
    BulmaIsBlockFullhdDirective,
    BulmaIsFlexMobileDirective,
    BulmaIsFlexTabletOnlyDirective,
    BulmaIsFlexDesktopOnlyDirective,
    BulmaIsFlexWidescreenOnlyDirective,
    BulmaIsFlexTouchDirective,
    BulmaIsFlexTabletDirective,
    BulmaIsFlexDesktopDirective,
    BulmaIsFlexWidescreenDirective,
    BulmaIsFlexFullhdDirective,
    BulmaIsInlineMobileDirective,
    BulmaIsInlineTabletOnlyDirective,
    BulmaIsInlineDesktopOnlyDirective,
    BulmaIsInlineWidescreenOnlyDirective,
    BulmaIsInlineTouchDirective,
    BulmaIsInlineTabletDirective,
    BulmaIsInlineDesktopDirective,
    BulmaIsInlineWidescreenDirective,
    BulmaIsInlineFullhdDirective,
    BulmaIsInlineBlockMobileDirective,
    BulmaIsInlineBlockTabletOnlyDirective,
    BulmaIsInlineBlockDesktopOnlyDirective,
    BulmaIsInlineBlockWidescreenOnlyDirective,
    BulmaIsInlineBlockTouchDirective,
    BulmaIsInlineBlockTabletDirective,
    BulmaIsInlineBlockDesktopDirective,
    BulmaIsInlineBlockWidescreenDirective,
    BulmaIsInlineBlockFullhdDirective,
    BulmaIsInlineFlexMobileDirective,
    BulmaIsInlineFlexTabletOnlyDirective,
    BulmaIsInlineFlexDesktopOnlyDirective,
    BulmaIsInlineFlexWidescreenOnlyDirective,
    BulmaIsInlineFlexTouchDirective,
    BulmaIsInlineFlexTabletDirective,
    BulmaIsInlineFlexDesktopDirective,
    BulmaIsInlineFlexWidescreenDirective,
    BulmaIsInlineFlexFullhdDirective,
    BulmaIsHiddenMobileDirective,
    BulmaIsHiddenTabletOnlyDirective,
    BulmaIsHiddenDesktopOnlyDirective,
    BulmaIsHiddenWidescreenOnlyDirective,
    BulmaIsHiddenTouchDirective,
    BulmaIsHiddenTabletDirective,
    BulmaIsHiddenDesktopDirective,
    BulmaIsHiddenWidescreenDirective,
    BulmaIsHiddenFullhdDirective,
    BulmaIsInvisibleDirective,
    BulmaIsHiddenDirective,
    BulmaIsSrOnlyDirective
  ],
  exports: [
    BulmaIsBlockDirective,
    BulmaIsFlexDirective,
    BulmaIsInlineDirective,
    BulmaIsInlineBlockDirective,
    BulmaIsInlineFlexDirective,
    BulmaIsBlockMobileDirective,
    BulmaIsBlockTabletOnlyDirective,
    BulmaIsBlockDesktopOnlyDirective,
    BulmaIsBlockWidescreenOnlyDirective,
    BulmaIsBlockTouchDirective,
    BulmaIsBlockTabletDirective,
    BulmaIsBlockDesktopDirective,
    BulmaIsBlockWidescreenDirective,
    BulmaIsBlockFullhdDirective,
    BulmaIsFlexMobileDirective,
    BulmaIsFlexTabletOnlyDirective,
    BulmaIsFlexDesktopOnlyDirective,
    BulmaIsFlexWidescreenOnlyDirective,
    BulmaIsFlexTouchDirective,
    BulmaIsFlexTabletDirective,
    BulmaIsFlexDesktopDirective,
    BulmaIsFlexWidescreenDirective,
    BulmaIsFlexFullhdDirective,
    BulmaIsInlineMobileDirective,
    BulmaIsInlineTabletOnlyDirective,
    BulmaIsInlineDesktopOnlyDirective,
    BulmaIsInlineWidescreenOnlyDirective,
    BulmaIsInlineTouchDirective,
    BulmaIsInlineTabletDirective,
    BulmaIsInlineDesktopDirective,
    BulmaIsInlineWidescreenDirective,
    BulmaIsInlineFullhdDirective,
    BulmaIsInlineBlockMobileDirective,
    BulmaIsInlineBlockTabletOnlyDirective,
    BulmaIsInlineBlockDesktopOnlyDirective,
    BulmaIsInlineBlockWidescreenOnlyDirective,
    BulmaIsInlineBlockTouchDirective,
    BulmaIsInlineBlockTabletDirective,
    BulmaIsInlineBlockDesktopDirective,
    BulmaIsInlineBlockWidescreenDirective,
    BulmaIsInlineBlockFullhdDirective,
    BulmaIsInlineFlexMobileDirective,
    BulmaIsInlineFlexTabletOnlyDirective,
    BulmaIsInlineFlexDesktopOnlyDirective,
    BulmaIsInlineFlexWidescreenOnlyDirective,
    BulmaIsInlineFlexTouchDirective,
    BulmaIsInlineFlexTabletDirective,
    BulmaIsInlineFlexDesktopDirective,
    BulmaIsInlineFlexWidescreenDirective,
    BulmaIsInlineFlexFullhdDirective,
    BulmaIsHiddenMobileDirective,
    BulmaIsHiddenTabletOnlyDirective,
    BulmaIsHiddenDesktopOnlyDirective,
    BulmaIsHiddenWidescreenOnlyDirective,
    BulmaIsHiddenTouchDirective,
    BulmaIsHiddenTabletDirective,
    BulmaIsHiddenDesktopDirective,
    BulmaIsHiddenWidescreenDirective,
    BulmaIsHiddenFullhdDirective,
    BulmaIsInvisibleDirective,
    BulmaIsHiddenDirective,
    BulmaIsSrOnlyDirective
  ]
})
export class BulmaVisibilityDirectivesModule {}
