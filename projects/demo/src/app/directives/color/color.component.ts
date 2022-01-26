import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  public isColor = [true, false, false, false, false, false, false];

  private interval = setInterval(() => {
    const idx = Math.floor(Math.random() * 7);
    for (let i = 0; i < this.isColor.length; i++) {
      if (idx === i) {
        this.isColor[i] = true;
      } else {
        this.isColor[i] = false;
      }
    }
  }, 1250);

  constructor() {}
}
