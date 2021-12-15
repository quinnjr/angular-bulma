import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BulmaIsClearfixDirective,
  BulmaIsPulledLeftDirective,
  BulmaIsPulledRightDirective,
  BulmaIsOverlayDirective,
  BulmaIsClippedDirective,
  BulmaIsRadiuslessDirective,
  BulmaIsShadowlessDirective,
  BulmaIsUnselectableDirective,
  BulmaIsClickableDirective,
  BulmaIsRelativeDirective
} from './helpers.directive';

import { BulmaIsActiveDirective } from './special.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BulmaIsClearfixDirective,
    BulmaIsPulledLeftDirective,
    BulmaIsPulledRightDirective,
    BulmaIsOverlayDirective,
    BulmaIsClippedDirective,
    BulmaIsRadiuslessDirective,
    BulmaIsShadowlessDirective,
    BulmaIsUnselectableDirective,
    BulmaIsClickableDirective,
    BulmaIsRelativeDirective,
    BulmaIsActiveDirective
  ],
  exports: [
    BulmaIsClearfixDirective,
    BulmaIsPulledLeftDirective,
    BulmaIsPulledRightDirective,
    BulmaIsOverlayDirective,
    BulmaIsClippedDirective,
    BulmaIsRadiuslessDirective,
    BulmaIsShadowlessDirective,
    BulmaIsUnselectableDirective,
    BulmaIsClickableDirective,
    BulmaIsRelativeDirective,
    BulmaIsActiveDirective
  ]
})
export class BulmaOtherDirectivesModule {}
