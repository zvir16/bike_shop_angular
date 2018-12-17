import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-rate',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit {
@Input() rating = 0;
@Input() count = 5;
         stars: boolean[] = [];
         starF = 'star';

  ngOnInit() {
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
