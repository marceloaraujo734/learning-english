export class HeartModel {

  constructor(public full: boolean,
              public fullHeartUrl: string = '../../../assets/images/coracao_cheio.png',
              public emptyHeartUrl: string = '../../../assets/images/coracao_vazio.png'
             ) { }

  public heartView(): string {
    return this.full ? this.fullHeartUrl : this.emptyHeartUrl;
  }

}
