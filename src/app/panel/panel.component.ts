import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Phrase } from '../shared/model/phrase.model';
import { Phrases } from '../shared/mock/phrases.mock';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { TypeEnum } from '../shared/enum/type.enum';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public instruction = 'Traduza a frase:';
  public answer = '';
  public phrases: Phrase[] = Phrases;

  public currentPhrase: Phrase;
  public round = 0;

  public progress = 0;
  public attempts = 3;

  @Output() public endGame: EventEmitter<TypeEnum>  = new EventEmitter();

  constructor() {
    this.changeCurrentPhrase();
   }

  ngOnInit() { }

  private changeRound(): void { this.round++; }

  private changeAttempts(): void { this.attempts--; }

  private clearAnswer(): void { this.answer = ''; }

  private changeProgress(): void {

    this.progress = this.progress + (100 / this.phrases.length);

  }

  private analyzeAnswer(): boolean {
    return this.currentPhrase.portuguese.toLowerCase() == this.answer.toLowerCase();
  }

  private VerifyMaximumErrors(): void {

    this.changeAttempts();

    this.verifyGameLose();

  }

  public answerUpdate(answer: Event): void {
    this.answer = (answer.target as HTMLInputElement).value;
  }

  public changeCurrentPhrase(): void {

    this.currentPhrase = this.phrases[this.round];
    this.clearAnswer();

  }

  public verifyGameWin(): void {
    if (this.round >= this.phrases.length) { this.endGame.emit(TypeEnum.Win); }
  }

  public verifyGameLose(): void {
    if (this.attempts == -1) { this.endGame.emit(TypeEnum.Lose); }
  }

  public verifyAnswer(): void {

    if (this.analyzeAnswer() == false) {
        this.VerifyMaximumErrors();
        return;
    }

    this.changeRound();
    this.changeProgress();

    this.verifyGameWin();

    this.changeCurrentPhrase();

  }

}
