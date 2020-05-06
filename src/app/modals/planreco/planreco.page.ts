import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-planreco',
  templateUrl: './planreco.page.html',
  styleUrls: ['./planreco.page.scss'],
})
export class PlanrecoPage implements OnInit {
  titulo: string;
  subtitulo: string;
  recomendacion: string;
  op: number;
  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    //tomando parametros
    this.titulo = this.navParams.data.titulo;
    this.subtitulo = this.navParams.data.subtitulo;
    this.recomendacion = this.navParams.data.reco;
    this.op = this.navParams.data.op;
  }

  async closeModal() {
    const onClosedData: string = "Regresando..";
    await this.modalController.dismiss(onClosedData);
  }

}
