import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-findclinic',
  templateUrl: './findclinic.page.html',
  styleUrls: ['./findclinic.page.scss'],
})
export class FindclinicPage implements OnInit {

  constructor(private navCTrl: NavController) { }

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
      default:
        break;
    }

  }

}
