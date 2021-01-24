import { Component, OnInit } from '@angular/core';
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

  constructor(private dishService:DishService,
              private promotionService: PromotionService,
              private leaderService:LeaderService) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish().then(dish =>(this.dish=dish));
    this.promotionService.getFeaturedPromotion().then(promotion =>(this.promotion=promotion));
    this.leaderService.getFeaturedLeader().then(leader => (this.leader=leader));
  }

}
