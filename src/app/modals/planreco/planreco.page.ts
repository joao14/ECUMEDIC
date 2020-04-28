import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-planreco',
  templateUrl: './planreco.page.html',
  styleUrls: ['./planreco.page.scss'],
})
export class PlanrecoPage implements OnInit {

  recomendacion: string;
  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.recomendacion = this.navParams.data.reco;
  }

  async closeModal() {
    const onClosedData: string = "Regresando..";
    await this.modalController.dismiss(onClosedData);
  }

}
