import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { FcmService } from '../services/fcm.service'
import { notification } from '../models/notification'
import { Subscription } from 'rxjs';
import { DatabaseService } from '../services/database.service'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  providers: [DatePipe]
})
export class NotificationsPage implements OnInit {

  public subscription1$: Subscription
  public notifys: Array<notification> = []
  public status: boolean = false

  constructor(private FCMService: FcmService, private base: DatabaseService, private platform: Platform, public navCtrl: NavController,
    private datePipe: DatePipe
  ) { }

  ionViewWillEnter() { }

  ngOnInit() {
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        //Valida si tiene activa las notificaciones
        this.getStatusNotifications()
      }
    })
  }

  /**
   * Function that allow to change the status of a notifications
   */
  getStatusNotifications() {
    this.base.getSetup('NOTIFY').then(data => {
      if (data != undefined) {
        if (data.value == "1") {
          this.status = true
          this.getAllNotifys()
        } else {
          this.status = false
        }
      }
    })
  }

  /**
   * Function that consult all notificactions
   */
  getAllNotifys() {   
    let today = this.datePipe.transform(new Date(), 'dd/MM/yyyy')
    this.base.loadNotify(today).then(data => {  
      if (data.length > 0) {  
        data.forEach(res => {
          this.notifys.push(res)
        })
      }
    })

  }

  /**
   * Function that delete a new notification
   * @param notify 
   */
  deleteNotify(notify: notification) {
    this.base.deleteNotify(notify).then(() => {
      this.notifys = []
      this.getAllNotifys()
    })
  }


  /**
   * Function that carries to information of notification
   * @param notify 
   */
  go(notify: notification) {
    this.base.updateNotify(notify).then(() => {
      this.navCtrl.navigateForward(['information', notify.id])
    })
  }

}