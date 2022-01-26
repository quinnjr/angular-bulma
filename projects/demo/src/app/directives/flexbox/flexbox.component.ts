import { Component } from '@angular/core';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent {
  public directions: Map<string, string> = new Map([
    ['bu-is-flex-direction-row', 'flex-direction: row'],
    ['bu-is-flex-direction-row-reverse', 'flex-direction: row-reverse'],
    ['bu-is-flex-direction-column', 'flex-direction: column'],
    ['bu-is-flex-direction-column-reverse', 'flex-direction: column-reverse']
  ]);

  public wraps: Map<string, string> = new Map([
    ['bu-is-flex-wrap-nowrap', 'flex-wrap: nowrap'],
    ['bu-is-flex-wrap-wrap', 'flex-wrap: wrap'],
    ['bu-is-flex-wrap-wrap-reverse', 'flex-wrap: wrap-reverse']
  ]);

  public justifyContent: Map<string, string> = new Map([
    ['bu-is-justify-content-flex-start', 'justify-content: flex-start'],
    ['bu-is-justify-content-flex-end', 'justify-content: flex-end'],
    ['bu-is-justify-content-center', 'justify-content: center'],
    ['bu-is-justify-content-space-between', 'justify-content: space-between'],
    ['bu-is-justify-content-space-around', 'justify-content: space-around'],
    ['bu-is-justify-content-space-evenly', 'justify-content: space-evenly'],
    ['bu-is-justify-content-start', 'justify-content: start'],
    ['bu-is-justify-content-end', 'justify-content: end'],
    ['bu-is-justify-content-left', 'justify-content: left'],
    ['bu-is-justify-content-right', 'justify-content: right']
  ]);

  public alignContent: Map<string, string> = new Map([
    ['bu-is-align-content-flex-start', 'align-content: flex-start'],
    ['bu-is-align-content-flex-end', 'align-content: flex-end'],
    ['bu-is-align-content-center', 'align-content: center'],
    ['bu-is-align-content-space-between', 'align-content: space-between'],
    ['bu-is-align-content-space-around', 'align-content: space-around'],
    ['bu-is-align-content-space-evenly', 'align-content: evenly'],
    ['bu-is-align-content-stretch', 'align-content: stretch'],
    ['bu-is-align-content-start', 'align-content: start'],
    ['bu-is-align-content-end', 'align-content: end'],
    ['bu-is-align-content-baseline', 'align-content: baseline']
  ]);

  public alignItems: Map<string, string> = new Map([
    ['bu-is-align-items-stretch', 'align-items: stretch'],
    ['bu-is-align-items-flex-start', 'align-items: flex-start'],
    ['bu-is-align-items-flex-end', 'align-items: flex-end'],
    ['bu-is-align-items-center', 'align-items: center'],
    ['bu-is-align-items-baseline', 'align-items: baseline'],
    ['bu-is-align-items-start', 'align-items: start'],
    ['bu-is-align-items-end', 'align-items: end'],
    ['bu-is-align-items-self-start', 'align-items: self-start'],
    ['bu-is-align-items-self-end', 'align-items: self-end']
  ]);

  public alignSelf: Map<string, string> = new Map([
    ['bu-is-align-self-auto', 'align-self: auto'],
    ['bu-is-align-self-flex-start', 'align-self: flex-start'],
    ['bu-is-align-self-flex-end', 'align-self: flex-end'],
    ['bu-is-align-self-center', 'align-self: center'],
    ['bu-is-align-self-baseline', 'align-self: baseline'],
    ['bu-is-align-self-stretch', 'align-self: stretch']
  ]);

  public flexGrowShrink: Map<string, string> = new Map([
    ['bu-is-flex-grow-0', 'flex-grow: 0'],
    ['bu-is-flex-grow-1', 'flex-grow: 1'],
    ['bu-is-flex-grow-2', 'flex-grow: 2'],
    ['bu-is-flex-grow-3', 'flex-grow: 3'],
    ['bu-is-flex-grow-4', 'flex-grow: 4'],
    ['bu-is-flex-grow-5', 'flex-grow: 5'],
    ['bu-is-flex-shrink-0', 'flex-shrink: 0'],
    ['bu-is-flex-shrink-1', 'flex-shrink: 1'],
    ['bu-is-flex-shrink-2', 'flex-shrink: 2'],
    ['bu-is-flex-shrink-3', 'flex-shrink: 3'],
    ['bu-is-flex-shrink-4', 'flex-shrink: 4'],
    ['bu-is-flex-shrink-5', 'flex-shrink: 5']
  ]);

  constructor() {}
}
