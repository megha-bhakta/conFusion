import { Injectable } from '@angular/core';
import { Dish} from 'src/app/model/dish';
import { DISHES} from 'src/app/model/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[]{
    return DISHES;
  }
}
