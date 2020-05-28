import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HeartModel } from 'src/app/shared/model/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {

  @Input() public attempts: number;

  public hearts: HeartModel[] = [
    new HeartModel(true), new HeartModel(true), new HeartModel(true)
  ];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {

    const adjustPosition = 1;

    if (this.attempts !== this.hearts.length) {
        const index = (this.hearts.length - this.attempts) - adjustPosition;
        this.hearts[index].full = false;
    }

  }

}
