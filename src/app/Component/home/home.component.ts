import { Component, Inject, OnInit } from '@angular/core';
import {Dish} from 'src/app/model/dish';
import{DishService} from 'src/app/service/dish.service';
import {Promotion} from 'src/app/model/promotion';
import {PromotionService} from 'src/app/service/promotion.service';
import{Leader} from 'src/app/model/leader';
import {LeaderService} from 'src/app/service/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish:Dish;
  promotion:Promotion;
  leader:Leader;
  errMsg :string;
  constructor(private dishService:DishService,
              private promotionService: PromotionService,
              private leaderService:LeaderService,
              @Inject('baseURL') public baseURL: string) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe(dish =>this.dish=dish,
      errMsg => this.errMsg = <any>errMsg);
    this.promotionService.getFeaturedPromotion().subscribe(promotion =>this.promotion=promotion,
      errMsg => this.errMsg = <any>errMsg);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader=leader,
      errMsg => this.errMsg = <any>errMsg);
  }

}
