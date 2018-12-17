import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit, OnChanges {
  myForm: FormGroup;
  categories: string[];
  @Output() filterProduct: EventEmitter<{title: string}> = new EventEmitter<{title: string}>();


  constructor (private fb: FormBuilder) {}

  ngOnInit () {
    this.categories = ['city bike', 'hardtile', 'softtile', 'e-bike', 'mountain bike'];
    this.formInit();
   }

   ngOnChanges () { }


formInit () {
  this.myForm = this.fb.group({
    title: [''],
    price: this.fb.group ({
      lprice: [''],
      mprice: ['']
    }),
    category: ['']
  });
}

searchProduct(){
  this.filterProduct.emit({
    title: this.myForm.controls['title'].value
    });
    console.log(this.myForm.controls['title'].value);
}
}
