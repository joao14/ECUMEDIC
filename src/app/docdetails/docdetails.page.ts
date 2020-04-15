import { CalldocmodalPage } from './../modals/calldocmodal/calldocmodal.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-docdetails',
  templateUrl: './docdetails.page.html',
  styleUrls: ['./docdetails.page.scss'],
})
export class DocdetailsPage implements OnInit {
  numeroContacto: string = '593998218429';
  mensajeWhatsapp: string = "Mensaje%20generado%20desde%20App%20Nutri%20Salud";

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private callNumber: CallNumber) { }

  ngOnInit() {
  }


  schedule() {
    console.log("scheduled");
  }

  goChat() {
    this.navCtrl.navigateForward('chat');
  }


  callDra() {
    this.callNumber.callNumber("+" + this.numeroContacto, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  async showCallModal() {
    const modal = await this.modalCtrl.create({
      component: CalldocmodalPage
    });

    return await modal.present();
  }




}
