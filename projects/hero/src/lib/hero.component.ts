import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hero',
  template: `
    <p>
      hero works!
    </p>
  `,
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
