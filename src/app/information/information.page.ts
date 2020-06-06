import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'
import { notification } from '../models/notification'
import { DatabaseService } from '../services/database.service'

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  public notify: notification

  constructor(private platform: Platform, private activeRoute: ActivatedRoute,
    public base: DatabaseService) { }

  ngOnInit() {    
    console.log('....Consultando la aplicación....');
    let id = this.activeRoute.snapshot.paramMap.get('id')
    console.log('Id notificación: ' + id);
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        //Valida si tiene activa las notificaciones
        this.getDataNotification(id)
      }
    })
  }

  getDataNotification(id: string) {
    console.log('Esta consultando la notificacion en el metodo' + id)
    this.base.getNotification(id).then(data => {      
      if (data != undefined) {
        console.log("ARRAY")        
        this.notify = {
          id: data.id,
          title: data.title,
          body: data.body,
          content: data.content,
          date: data.date,
          status: data.status
        }  
        console.log(this.notify);        
      }
    })
  }



}
