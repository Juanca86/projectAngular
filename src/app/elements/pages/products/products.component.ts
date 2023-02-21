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
  filtrar: any[] = [];
  userList: boolean = false;
  cuadricula: boolean = true;
  mensaje: string = 'Lista';

  cambiarVista() {
    if (this.userList) {
      this.userList = false;
      this.mensaje = 'Lista';
    } else {
      this.userList = true;
      this.mensaje = 'Cuadricula';
    }
    if (this.cuadricula) {
      this.cuadricula = true;
      this.mensaje = 'Cuadricula';
    } else {
      this.cuadricula = false;
      this.mensaje = 'Lista';
    }
  }

  //funcion para el buscador
  webSeeker(filtro: any) {
    this.filtrar = this.productsList.filter((product) =>
      product.name.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
    );
  }

  constructor(private shopeameService: ShopeameService) {}

  ngOnInit(): void {
    this.shopeameService.getProducts().subscribe((data: any) => {
      this.productsList = [...data];
    });
  }
}
