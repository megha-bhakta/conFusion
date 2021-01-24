import { Injectable } from '@angular/core';
import {Promotion} from 'src/app/model/promotion';
import {PROMOTIONS} from '../service/Promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]>{
    return new Promise(resolve =>{
      setTimeout( () => resolve(PROMOTIONS),2000);
    });
  }

  getPromotion(id: string): Promise<Promotion> {
    return new Promise(resolve =>{
      setTimeout( () => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]),2000);
    });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(resolve =>{
      setTimeout( () => resolve(PROMOTIONS.filter((promo) => promo.featured)[0]),2000);
    });
  }
}
