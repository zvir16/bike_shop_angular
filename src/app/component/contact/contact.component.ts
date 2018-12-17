import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      name: this.fb.group({
        fname: ['', Validators.required],
        sname: ['', Validators.required]
          }),
      phone: ['+380', [Validators.required, Validators.minLength(13), Validators.pattern(/^\+[1-9]{1}[0-9]{3,14}$/)]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(400)]]
    });
  }

onSubmit() {
  if (!this.contactForm.invalid) {
    console.log(this.contactForm.value);
    // this.contactForm.reset();
  }

}

}
