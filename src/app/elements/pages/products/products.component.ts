import { Component } from '@angular/core';
import { ShopeameService } from 'src/app/service/shopeame.service';
import { Items } from 'src/app/model/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productsList: Items[] = [];

  constructor(private shopeameService: ShopeameService) {}

  ngOnInit(): void {
    this.shopeameService.getProducts().subscribe((data: any) => {
      this.productsList = [...data];
    });
  }
}
