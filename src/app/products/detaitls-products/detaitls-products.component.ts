import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService } from '../../shared/data.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-detaitls-products',
  templateUrl: './detaitls-products.component.html',
  styleUrls: ['./detaitls-products.component.scss']
})
export class DetaitlsProductsComponent implements OnInit {
public product: any = {};
  constructor(private route:ActivatedRoute, private dataSvc: DataService
    , private location : Location) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.product= this.dataSvc.getProductById(productId);

  }

  onGoBack(): void{
    this.location.back();
  }
}
