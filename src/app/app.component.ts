import { Component, OnInit } from '@angular/core';
import { DescriptionService } from './description.service';
import { ItemDescription } from './item-description';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'template';
  aContent:ItemDescription[] = [];
  constructor(private service :DescriptionService){
  }
  ngOnInit(){
    
    this.aContent = this.service.getContent();
    console.log(this.aContent);
  }
}
