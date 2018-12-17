import { Component, Input } from '@angular/core';

import { Product } from '../../shared/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.sass']
})
export class ProductlistComponent  {
  @Input() product: Product;
}
