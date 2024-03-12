import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  saveEachCont(countValue: number) {
    if (countValue % 2 === 0) {
      this.evenNumbers.push(countValue);
    } else {
      this.oddNumbers.push(countValue);
    }
  }
}
