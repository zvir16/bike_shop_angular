import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore  } from '@angular/fire/firestore';

import { AppComponent } from './component/application/app.component';
import { HomeComponent } from './component/home/home.component';
import { SetupComponent } from './component/setup/setup.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ProductdetailComponent } from './component/productdetail/productdetail.component';
import { CartComponent } from './component/cart/cart.component';
import { RatingComponent } from './component/rating/rating.component';
import { ContactComponent } from './component/contact/contact.component';
import { FormComponent } from './component/form/form.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';

import { HoveredDirective } from './directive/hovered/hovered.directive';
import { SearchPipe } from './pipes/search.pipe';
import { environment } from './shared/environment';
import { FireproductService } from './services/fireproduct.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupComponent,
    ProductlistComponent,
    ProductdetailComponent,
    HoveredDirective,
    CartComponent,
    RatingComponent,
    ContactComponent,
    FormComponent,
    SearchPipe,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterializeModule,
    AngularFireModule.initializeApp(environment.fire),
    AngularFireStorageModule
  ],
  providers: [AngularFirestore, FireproductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
