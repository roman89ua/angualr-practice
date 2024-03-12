import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  interval: number;
  gameStatus: 'started' | 'stopped' = 'stopped';
  @Output('count') countNumber = new EventEmitter<number>();

  currentCount: number = 0;
  onGameStart() {
    this.gameStatus = 'started';
    this.interval = setInterval(() => {
      this.countNumber.emit(this.currentCount + 1);
      this.currentCount++;
    }, 1000);
  }
  onGameStop() {
    this.gameStatus = 'stopped';
    clearInterval(this.interval);
  }
}
