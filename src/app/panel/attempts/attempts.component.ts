import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  fullHeart = '../../../assets/images/coracao_cheio.png';
  emptyHeart = '../../../assets/images/coracao_vazio.png';

  constructor() { }

  ngOnInit() {
  }

}
