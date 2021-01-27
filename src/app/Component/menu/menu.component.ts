import { Component, Inject, OnInit } from '@angular/core';
import { expand, flyInOut } from 'src/app/animations/app.animations';
import { Dish } from 'src/app/model/dish';
import { DishService } from 'src/app/service/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes :Dish[];
  selectedDish:Dish;
  errMsg: string;
  constructor(private _dishservice: DishService,
    @Inject('baseURL') public baseURL) { }

  ngOnInit(): void {
    this._dishservice.getDishes().subscribe(dishes =>this.dishes = dishes,
       errMsg => this.errMsg = <any>errMsg);
  }



}
