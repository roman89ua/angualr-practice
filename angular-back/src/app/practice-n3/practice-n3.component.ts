import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-n3',
  templateUrl: './practice-n3.component.html',
  styleUrl: './practice-n3.component.scss',
})
export class PracticeN3Component {
  isContentVisible: boolean = false;
  timeStamps: number[] = [];

  toggleInfoHandler() {
    this.timeStamps.push(Date.now());
    this.isContentVisible = !this.isContentVisible;
    console.log(this.timeStamps);
  }

  getTimeStampListColor(index: number) {
    console.log({ index });
    return index > 3 ? 'white' : 'black';
  }
}
