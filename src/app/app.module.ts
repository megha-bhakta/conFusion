import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MenuComponent} from './Component/menu/menu.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule} from '@angular/material/slider';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { DishdetailComponent } from './Component/dishdetail/dishdetail.component';
import { DishService} from 'src/app/service/dish.service';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';

import { RouterModule} from '@angular/router';
import { routes} from '../app/route';
import { LoginComponent } from './Component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishService],
  entryComponents:[
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
