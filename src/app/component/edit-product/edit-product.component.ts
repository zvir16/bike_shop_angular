import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FireproductService } from '../../services/fireproduct.service';
import { Product } from '../../shared/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.sass']
})
export class EditProductComponent implements OnInit {
  editForm: FormGroup;
  product: Product;
  id: string;
  category: string[] = ['e bike', 'mountain bike', 'city bike', 'kids bike'];

  constructor(private fbuilder: FormBuilder,
              private fire: FireproductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // initialize form
    this.editForm = this.fbuilder.group({
      title: [''],
      price: [''],
      rate: [''],
      category: ['']
    });

    // get data to edit
    this.id = this.route.snapshot.paramMap.get('id');
    this.fire.getProduct(this.id).subscribe(product => {
              this.product = product;
              this.editForm.setValue({
                title: product.title,
                price: product.price,
                rate: product.rate,
                category: this.category
              });
    });
  }
editProduct() {
  this.fire.updateProduct({
    id: this.id,
    title: this.editForm.get('title').value,
    price: this.editForm.get('price').value,
    rate: this.editForm.get('rate').value,
    img: this.product.img,
    category: this.editForm.get('category').value
  });
  // to home page
 this.goHome();
}

goHome() {
  this.router.navigate(['/']);
}
}
