import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-message',
  template: `
    <p>
      message works!
    </p>
  `,
  styles: [
  ]
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
