import { Component } from '@angular/core';
import { TypeEnum } from './shared/enum/type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gameInProgress = true;
  public gameProgress: TypeEnum;

  public endGame(type: TypeEnum): void {
    this.gameInProgress = false;
    this.gameProgress = type;
  }

  public restartGame(): void {
    this.gameInProgress = true;
    this.gameProgress = TypeEnum.Play;
  }

  public verifyGameLose(type: TypeEnum): boolean {
    return type == TypeEnum.Lose;
  }

  public verifyGameWin(type: TypeEnum): boolean {
    return type == TypeEnum.Win;
  }
}
