import { Component, OnInit } from '@angular/core';

export interface Ingredients {
  meter: string;
  type: string;
}

export interface Food {
  ingredients: Array<Ingredients>;
}

export interface Foods {
  title: string;
  food: Array<Food>;
}

@Component({
  selector: 'app-findfood',
  templateUrl: './findfood.page.html',
  styleUrls: ['./findfood.page.scss'],
})
export class FindfoodPage implements OnInit {

  foods: Array<Food> = [];

  constructor() { }

  ngOnInit() {
  }

  geData() {

    this.

      this.foods = [
        {
          title: "Almidos Cereales y Legumbres",
          meter: [
            { "1/2 Taza", "1/4 Taza"}
          ],
          ingredients: "Huevo",
          type: [
            {
              "Duro", "Tibio"
          }
          ]
        }
      ]
  }

}
