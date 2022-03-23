import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
  
  public products$:  Observable<any[]>;


  constructor(private data: DataService) { 

    this.products$ = new Observable();
  }

  ngOnInit(): void {
    this.products$ = this.data.getProducts();
  }

}
