import { SignupdonemodalPage } from './../modals/signupdonemodal/signupdonemodal.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, PickerController, ModalController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  activeIndex: number = 0;
  numbers:any;
  numberss:any;
  weight = '';
  height = '';

  @ViewChild('profileImages',{static:true}) slides: IonSlides;
  constructor(public pickerCtrl:PickerController,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.slides.length()
    .then(num=>{
      this.numbers = num;
      console.log(this.numbers);
      this.numberss = Array(this.numbers).fill(0).map((x,i)=>i);
    })
   
  }

  checkIsend()
  {
   this.slides.isEnd()
   .then(result=>{
     console.log(result);
     this.switchFunctions(result);
   }) 
  }

  switchFunctions(result)
  {
    if(result)
    {
      this.showCheckoutModal();
    }

    else
    {
      this.slides.slideNext();
    }

  }

  onSlideChange() {
    this.slides.getActiveIndex()
      .then(index => {
        this.activeIndex = index;
        console.log(this.activeIndex);
      })
  }

  async showPicker()
  {
    let opts: PickerOptions = {
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done',
        }

      ],
      columns:[
        {
          name: 'weight',
          options:[
            {
              text: '30KG', value: '30'
            },
            {
              text: '31KG', value: '31'
            },
            {
              text: '32KG', value: '32'
            }
          ]
        }

      ],
    };

    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let col = await picker.getColumn('weight');
      console.log('col',col)
      this.weight = col.options[col.selectedIndex].text;
    })
  }

  async showPicker2()
  {
    let opts: PickerOptions = {
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done',
        }

      ],
      columns:[
        {
          name: 'height',
          options:[
            {
              text: '50', value: '50'
            },
            {
              text: '51', value: '51'
            },
            {
              text: '52', value: '52'
            },
            {
              text: '53', value: '53'
            },
            {
              text: '54', value: '54'
            }
          ]
        },
        {
          name: 'unit',
          options:[
            {
              text: 'cm', value: 'cm'
            },
            {
              text: 'inches', value: 'inches'
            },
     
          ]
        },
        

      ],
    };

    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let height = await picker.getColumn('height');
      let unit = await picker.getColumn('unit');
      console.log('height',height)
      this.height = height.options[height.selectedIndex].text,
                    unit.options[unit.selectedIndex].text
    });
  }

  async showCheckoutModal()
  {
    const modal = await this.modalCtrl.create({
      component: SignupdonemodalPage
    });

    return await modal.present();
  }

  

}
