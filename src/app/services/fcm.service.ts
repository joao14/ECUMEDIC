import { Injectable } from '@angular/core';
import { notify } from '../models/notify';
import { Observable, BehaviorSubject } from 'rxjs'
import { DatabaseService } from './database.service'



@Injectable({
  providedIn: 'root'
})
export class FcmService {

  private notificationObs$: BehaviorSubject<notify> = new BehaviorSubject(null);


  constructor(public base: DatabaseService) {
  }

  geNotificationObs(): Observable<notify> {
    return this.notificationObs$.asObservable()
  }

  setNotificationObs(notify_: notify) {
    this.notificationObs$.next(notify_)
    this.base.addNotify(notify_)
  }


}
