import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlanrecoPage } from '../modals/planreco/planreco.page';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-plan-alimentos',
  templateUrl: './plan-alimentos.page.html',
  styleUrls: ['./plan-alimentos.page.scss'],
})
export class PlanAlimentosPage implements OnInit {
  dataReturned: any;
  recomendacion: string;
  constructor(public modalController: ModalController) {
    let paciente: Paciente = JSON.parse(localStorage.getItem('lresponse'));
    this.recomendacion = paciente.planreco;
  }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: PlanrecoPage,
      componentProps: {
        "reco": this.recomendacion
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

}
