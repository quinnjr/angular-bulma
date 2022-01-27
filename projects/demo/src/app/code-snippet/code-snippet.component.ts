import {
  Component,
  AfterViewInit,
  ElementRef,
  Input,
  ContentChild
} from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-code-snippet',
  template: `<p class="snippet-title">{{ title }}</p>
    <ng-content></ng-content>`,
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent implements AfterViewInit {
  @Input() title = '';

  @ContentChild('highlight') codeBlock?: ElementRef;

  constructor() {
    hljs.configure({
      ignoreUnescapedHTML: true
    });
  }

  ngAfterViewInit(): void {
    if (this.codeBlock) {
      hljs.highlightElement(this.codeBlock.nativeElement);
    }
  }
}
