import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/model/dish';
import { DISHES} from 'src/app/model/dishes';
import { DishService } from 'src/app/service/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes :Dish[];
  selectedDish:Dish;
  constructor(private _dishservice : DishService) { }

  ngOnInit(): void {
    this.dishes= this._dishservice.getDishes();
  }

  onSelect(dish: Dish){
    this.selectedDish=dish;
  }

}
