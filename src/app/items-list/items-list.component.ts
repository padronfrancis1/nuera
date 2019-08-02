import { Component, OnInit } from '@angular/core';
import { ItemsListService } from './items-list.service'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  providers: [ItemsListService]
})
export class ItemsListComponent implements OnInit {

  itemsList: string[];
  // This is a reference to the service
  // Dependecy Injection - injecting the service wihtout tighly coupling it with the component
  constructor(itemsListService: ItemsListService) {

    this.itemsList = itemsListService.getItemsList();
    
  }

  ngOnInit() {
  }

}
