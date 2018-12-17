import { Component, OnInit, Input } from '@angular/core';

import { FireproductService } from '../../services/fireproduct.service';
import { Product } from '../../shared/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: Product[];
  @Input() searchTitleData;

  constructor(private fire: FireproductService) { }

  ngOnInit() {
    this.fire.getProducts()
          .subscribe( (res) => {
                this.products = res;
              }
            );

  }
  filterProduct(filter){
    this.searchTitleData = filter.title;
  }

}
