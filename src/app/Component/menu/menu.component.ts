import { Component, Inject, OnInit } from '@angular/core';
import { Dish } from 'src/app/model/dish';
import { DishService } from 'src/app/service/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes :Dish[];
  selectedDish:Dish;

  constructor(private _dishservice: DishService,
    @Inject('baseURL') public baseURL) { }

  ngOnInit(): void {
    this._dishservice.getDishes().subscribe(dishes =>(this.dishes = dishes));
  }



}
