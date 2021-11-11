import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card',
  template: `
    <p>
      card works!
    </p>
  `,
  styles: [
  ]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
