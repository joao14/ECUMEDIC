import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonContent, IonTextarea } from '@ionic/angular';
import MESSAGES from './messages.dummy';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: any[];
  typingMessage: string = '';
  showGiphy: boolean = false;
  @Output() onSubmit = new EventEmitter();
  @Output() onSizeChange = new EventEmitter();
  @ViewChild('messageInput',{static:false}) messageInput: IonTextarea;
  @ViewChild(IonContent,{static:true}) content: IonContent;
  constructor() {
    this.init();
   }

   init() {
    // TODO: can be your API response
    this.messages = MESSAGES;
  }

  ngOnInit() {
    this.scrollToBottom(null, true);
  }

  onSubmitMessage(data) {
    this.messages.push({
      isSender: true,
      type: data.type, // 'text' or 'image'
      body: data.type === 'image' ? data.imageUrl : data.message,
      timestamp: 'Jan 25, 2019 9:55am'
    });

    setTimeout(() => {
      this.scrollToBottom();
      this.fakeReply();
    });
  }

  fakeReply() {
    this.messages.push({
      isSender: false,
      avatar: 'assets/img/avatars/hieu.png',
      type: 'text',
      body: 'Nice. Keep typing dude',
      timestamp: 'Jan 25, 2019 9:57am'
    });

    setTimeout(() => {
      this.scrollToBottom();
    }, 500);
  }

  scrollToBottom(duration = 500, isFirstLoad = false) {
    // this.content.resize();
    if (isFirstLoad) {
      setTimeout(() => {
        this.content.scrollToBottom(duration);
      }, 500);
    } else {
      this.content.scrollToBottom(duration);
    }
  }

  onInputSizeChange() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }

  sendText(text) {
    this.onSubmit.emit({
      type: 'text',
      message: text
    });
    this.typingMessage = '';
    this.messageInput.setFocus();
  }

}
