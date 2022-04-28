import { Component, Input, OnInit } from '@angular/core';
import { SupplyService } from '../../supply.service';
import { user } from '../../data'; 
@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {
@Input() data: any;
  constructor( private supplyService:SupplyService) { }
  aData:user[] = [];
  ngOnInit(): void {
    this.aData = this.supplyService.getData();
  }

}
