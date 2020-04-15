import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.page.html',
  styleUrls: ['./doctorlist.page.scss'],
})
export class DoctorlistPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  goDocDetails()
  {
    this.navCtrl.navigateForward('docdetails');
  }

}
