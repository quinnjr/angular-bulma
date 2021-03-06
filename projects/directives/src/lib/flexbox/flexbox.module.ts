import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BulmaIsFlexDirectionRowDirective,
  BulmaIsFlexDirectionRowReverseDirective,
  BulmaIsFlexDirectionColumnDirective,
  BulmaIsFlexDirectionColumnReverseDirective
} from './flex-direction.directive';

import {
  BulmaIsFlexNowrapDirective,
  BulmaIsFlexWrapWrapDirective,
  BulmaIsFlexWrapWrapReverseDirective
} from './flex-wrap.directive';

import {
  BulmaIsJustifyContentFlexStartDirective,
  BulmaIsJustifyContentFlexEndDirective,
  BulmaIsJustifyContentCenterDirective,
  BulmaIsJustifyContentSpaceBetweenDirective,
  BulmaIsJustifyContentSpaceAroundDirective,
  BulmaIsJustifyContentSpaceEvenlyDirective,
  BulmaIsJustifyContentStartDirective,
  BulmaIsJustifyContentEndDirective,
  BulmaIsJustifyContentLeftDirective,
  BulmaIsJustifyContentRightDirective
} from './justify-content.directive';

import {
  BulmaIsAlignContentFlexStartDirective,
  BulmaIsAlignContentFlexEndDirective,
  BulmaIsAlignContentCenterDirective,
  BulmaIsAlignContentSpaceBetweenDirective,
  BulmaIsAlignContentSpaceAroundDirective,
  BulmaIsAlignContentSpaceEvenlyDirective,
  BulmaIsAlignContentStretchDirective,
  BulmaIsAlignContentStartDirective,
  BulmaIsAlignContentEndDirective,
  BulmaIsAlignContentBaselineDirective
} from './align-content.directive';

import {
  BulmaIsAlignItemsStretchDirective,
  BulmaIsAlignItemsFlexStartDirective,
  BulmaIsAlignItemsFlexEndDirective,
  BulmaIsAlignItemsCenterDirective,
  BulmaIsAlignItemsBaselineDirective,
  BulmaIsAlignItemsStartDirective,
  BulmaIsAlignItemsEndDirective,
  BulmaIsAlignItemsSelfStartDirective,
  BulmaIsAlignItemsSelfEndDirective
} from './align-items.directive';

import {
  BulmaIsAlignSelfAutoDirective,
  BulmaIsAlignSelfFlexStartDirective,
  BulmaIsAlignSelfFlexEndDirective,
  BulmaIsAlignSelfCenterDirective,
  BulmaIsAlignSelfBaselineDirective,
  BulmaIsAlignSelfStretchDirective
} from './align-self.directive';

import {
  BulmaIsFlexGrow0Directive,
  BulmaIsFlexGrow1Directive,
  BulmaIsFlexGrow2Directive,
  BulmaIsFlexGrow3Directive,
  BulmaIsFlexGrow4Directive,
  BulmaIsFlexGrow5Directive
} from './flex-grow.directive';

import {
  BulmaIsFlexShrink0Directive,
  BulmaIsFlexShrink1Directive,
  BulmaIsFlexShrink2Directive,
  BulmaIsFlexShrink3Directive,
  BulmaIsFlexShrink4Directive,
  BulmaIsFlexShrink5Directive
} from './flex-shrink.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BulmaIsFlexDirectionRowDirective,
    BulmaIsFlexDirectionRowReverseDirective,
    BulmaIsFlexDirectionColumnDirective,
    BulmaIsFlexDirectionColumnReverseDirective,
    BulmaIsFlexNowrapDirective,
    BulmaIsFlexWrapWrapDirective,
    BulmaIsFlexWrapWrapReverseDirective,
    BulmaIsJustifyContentFlexStartDirective,
    BulmaIsJustifyContentFlexEndDirective,
    BulmaIsJustifyContentCenterDirective,
    BulmaIsJustifyContentSpaceBetweenDirective,
    BulmaIsJustifyContentSpaceAroundDirective,
    BulmaIsJustifyContentSpaceEvenlyDirective,
    BulmaIsJustifyContentStartDirective,
    BulmaIsJustifyContentEndDirective,
    BulmaIsJustifyContentLeftDirective,
    BulmaIsJustifyContentRightDirective,
    BulmaIsAlignContentFlexStartDirective,
    BulmaIsAlignContentFlexEndDirective,
    BulmaIsAlignContentCenterDirective,
    BulmaIsAlignContentSpaceBetweenDirective,
    BulmaIsAlignContentSpaceAroundDirective,
    BulmaIsAlignContentSpaceEvenlyDirective,
    BulmaIsAlignContentStretchDirective,
    BulmaIsAlignContentStartDirective,
    BulmaIsAlignContentEndDirective,
    BulmaIsAlignContentBaselineDirective,
    BulmaIsAlignItemsStretchDirective,
    BulmaIsAlignItemsFlexStartDirective,
    BulmaIsAlignItemsFlexEndDirective,
    BulmaIsAlignItemsCenterDirective,
    BulmaIsAlignItemsBaselineDirective,
    BulmaIsAlignItemsStartDirective,
    BulmaIsAlignItemsEndDirective,
    BulmaIsAlignItemsSelfStartDirective,
    BulmaIsAlignItemsSelfEndDirective,
    BulmaIsAlignSelfAutoDirective,
    BulmaIsAlignSelfFlexStartDirective,
    BulmaIsAlignSelfFlexEndDirective,
    BulmaIsAlignSelfCenterDirective,
    BulmaIsAlignSelfBaselineDirective,
    BulmaIsAlignSelfStretchDirective,
    BulmaIsFlexGrow0Directive,
    BulmaIsFlexGrow1Directive,
    BulmaIsFlexGrow2Directive,
    BulmaIsFlexGrow3Directive,
    BulmaIsFlexGrow4Directive,
    BulmaIsFlexGrow5Directive,
    BulmaIsFlexShrink0Directive,
    BulmaIsFlexShrink1Directive,
    BulmaIsFlexShrink2Directive,
    BulmaIsFlexShrink3Directive,
    BulmaIsFlexShrink4Directive,
    BulmaIsFlexShrink5Directive
  ],
  exports: [
    BulmaIsFlexDirectionRowDirective,
    BulmaIsFlexDirectionRowReverseDirective,
    BulmaIsFlexDirectionColumnDirective,
    BulmaIsFlexDirectionColumnReverseDirective,
    BulmaIsFlexNowrapDirective,
    BulmaIsFlexWrapWrapDirective,
    BulmaIsFlexWrapWrapReverseDirective,
    BulmaIsJustifyContentFlexStartDirective,
    BulmaIsJustifyContentFlexEndDirective,
    BulmaIsJustifyContentCenterDirective,
    BulmaIsJustifyContentSpaceBetweenDirective,
    BulmaIsJustifyContentSpaceAroundDirective,
    BulmaIsJustifyContentSpaceEvenlyDirective,
    BulmaIsJustifyContentStartDirective,
    BulmaIsJustifyContentEndDirective,
    BulmaIsJustifyContentLeftDirective,
    BulmaIsJustifyContentRightDirective,
    BulmaIsAlignContentFlexStartDirective,
    BulmaIsAlignContentFlexEndDirective,
    BulmaIsAlignContentCenterDirective,
    BulmaIsAlignContentSpaceBetweenDirective,
    BulmaIsAlignContentSpaceAroundDirective,
    BulmaIsAlignContentSpaceEvenlyDirective,
    BulmaIsAlignContentStretchDirective,
    BulmaIsAlignContentStartDirective,
    BulmaIsAlignContentEndDirective,
    BulmaIsAlignContentBaselineDirective,
    BulmaIsAlignItemsStretchDirective,
    BulmaIsAlignItemsFlexStartDirective,
    BulmaIsAlignItemsFlexEndDirective,
    BulmaIsAlignItemsCenterDirective,
    BulmaIsAlignItemsBaselineDirective,
    BulmaIsAlignItemsStartDirective,
    BulmaIsAlignItemsEndDirective,
    BulmaIsAlignItemsSelfStartDirective,
    BulmaIsAlignItemsSelfEndDirective,
    BulmaIsAlignSelfAutoDirective,
    BulmaIsAlignSelfFlexStartDirective,
    BulmaIsAlignSelfFlexEndDirective,
    BulmaIsAlignSelfCenterDirective,
    BulmaIsAlignSelfBaselineDirective,
    BulmaIsAlignSelfStretchDirective,
    BulmaIsFlexGrow0Directive,
    BulmaIsFlexGrow1Directive,
    BulmaIsFlexGrow2Directive,
    BulmaIsFlexGrow3Directive,
    BulmaIsFlexGrow4Directive,
    BulmaIsFlexGrow5Directive,
    BulmaIsFlexShrink0Directive,
    BulmaIsFlexShrink1Directive,
    BulmaIsFlexShrink2Directive,
    BulmaIsFlexShrink3Directive,
    BulmaIsFlexShrink4Directive,
    BulmaIsFlexShrink5Directive
  ]
})
export class BulmaFlexboxDirectivesModule {}
