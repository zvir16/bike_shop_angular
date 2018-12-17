import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FireproductService } from '../../services/fireproduct.service';
import { Product } from '../../shared/product';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.sass']
})
export class SetupComponent implements OnInit {
  products: Product[] = [];
  respond;
  imgBlob; // data send to storage, with slice
  // data for preview insert in base64
  imgPreview = 'https://firebasestorage.googleapis.com/v0/b/bikeshop-9f7a9.appspot.com/o/bikeshopImages%2Fplaceholder.png?alt=media&token=8e3b47e3-2024-4cc8-9230-c2f2d6b154d6';
  imgLink;
  productForm: FormGroup;
  product: Product;
  category: string[] = ['e bike', 'mountain bike', 'city bike', 'kids bike'];


  constructor(private fire: FireproductService, private fb: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.productForm = this.fb.group({
      title: [''],
      category: [''],
      price: ['']
    });
  }

  addProduct() {
    const product: Product = {
        title: this.productForm.value.title,
        price: this.productForm.value.price,
        img: this.imgLink,
        rate: 0,
        category: this.productForm.value.category};
        this.fire.createProduct(product, this.imgBlob);
        this.router.navigate(['/']);
      }

  selectImg (event: any) {
    if (event.target.files && event.target.files[0].name) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imgLink = event.target.files[0].name;
        const data = reader.result as string;
        this.imgPreview = data;
        this.imgBlob = data.slice(23); //slice 'data:image/jpeg;base64,' for corect work with firebase Storage
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }


}
