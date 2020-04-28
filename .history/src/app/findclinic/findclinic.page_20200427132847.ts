import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-findclinic',
  templateUrl: './findclinic.page.html',
  styleUrls: ['./findclinic.page.scss'],
})
export class FindclinicPage implements OnInit {
  
  constructor(private navCTrl:NavController) { }

  ngOnInit() {
  }

  goClinicDetails()
  {
    this.navCTrl.navigateForward('clinicdetails');
  }

  goFindFood(){
    console.log("Ingresando a la páagina de alimentos")
    this.navCTrl.push("findfood")
  }

  goFindPlan(){
    console.log("Ingresando a la páagina de planes")
  }

}
