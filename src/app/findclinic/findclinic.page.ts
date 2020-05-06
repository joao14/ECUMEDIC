import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { PlanrecoPage } from '../modals/planreco/planreco.page';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-findclinic',
  templateUrl: './findclinic.page.html',
  styleUrls: ['./findclinic.page.scss'],
})
export class FindclinicPage implements OnInit {
  agua: string;
  ejercicio: string;
  constructor(private navCTrl: NavController, public modalController: ModalController) {
    let paciente: Paciente = JSON.parse(localStorage.getItem('lresponse'));
    this.agua = paciente.planagua;
    this.ejercicio = paciente.planacfi;
  }

  ngOnInit() {
  }

  goOption(op: number) {
    switch (op) {
      case 1:
        this.navCTrl.navigateForward('clinicdetails');
        break;
      case 2:
        this.navCTrl.navigateForward('plan-alimentos');
        break;
      case 3:
        //this.navCTrl.navigateForward('plan-alimentos');
        break;
      case 4:
        //this.navCTrl.navigateForward('plan-alimentos');
        break;
      case 5:
        this.openModal(2);
        break;
      case 6:
        this.openModal(3);
        break;
      default:
        break;
    }

  }

  async openModal(op: number) {
    const modal = await this.modalController.create({
      component: PlanrecoPage,
      componentProps: {
        "reco": op == 2 ? '<p><b>Usted debe beber:</b></p>'+this.agua : '<p><b>Recuerde realizar ejercicio:</b></p>'+this.ejercicio,
        "titulo": "Plan Nutricional",
        "subtitulo": op == 2 ? 'Agua' : 'Ejercicio',
        "op": op
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      // if (dataReturned !== null) {
      //   this.dataReturned = dataReturned.data;
      //   
      // }
    });

    return await modal.present();
  }

}
