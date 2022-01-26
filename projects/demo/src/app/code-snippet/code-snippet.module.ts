import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeSnippetComponent } from './code-snippet.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CodeSnippetComponent],
  exports: [CodeSnippetComponent]
})
export class CodeSnippetModule {}
