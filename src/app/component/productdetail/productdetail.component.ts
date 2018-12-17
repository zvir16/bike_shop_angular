import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FireproductService } from '../../services/fireproduct.service';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.sass']
})
export class ProductdetailComponent implements OnInit {
 product;
 id;

constructor( private activatedRoute: ActivatedRoute,
             private fire: FireproductService,
             private router: Router
           ) {   }

ngOnInit() {
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  this.fire.getProduct(this.id).subscribe(product => {
    this.product = product;
  });
}

onDelete () {
  this.fire.deleteProduct(this.id);
  this.goBack();
}


goBack() {
  this.router.navigate(['/']);
}

}
