import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BuildData } from './build-data';
import { ProductService } from './app/product.service';


@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})

export class ManageProductComponent {
  buildData$: Observable<BuildData[]>;

  const buildData = this.ProductService.getBuildData();
  this.buildData$.subscribe({
    next(response) {
          console.log(response);
        },
        error(err) {
          console.error('Error: ' + err);
        },
        complete() {
          console.log('Completed');
        }
  })
}