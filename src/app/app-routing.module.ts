import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { SetupComponent } from './component/setup/setup.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductdetailComponent} from './component/productdetail/productdetail.component';
import { ContactComponent } from './component/contact/contact.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'setup', component: SetupComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductdetailComponent},
  {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'contact', component: ContactComponent },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
