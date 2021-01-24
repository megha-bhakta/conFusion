import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/model/dish';
import {DishService} from 'src/app/service/dish.service';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {


  dish: Dish;

  constructor(private dishService:DishService,
              private activatedRouter:ActivatedRoute,
              private location:Location) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.dishService.getDish(id).then(dish =>(this.dish=dish));
  }

  goBack():void{
    this.location.back();
  }
}
