import {Routes} from '@angular/router';

import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { MenuComponent} from './Component/menu/menu.component';
import { DishdetailComponent } from './Component/dishdetail/dishdetail.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'dishdetail/:id',component:DishdetailComponent},
  {path:'aboutus', component:AboutComponent},
  {path:'contactus', component:ContactComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
  ];
