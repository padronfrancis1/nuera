import { Injectable } from '@angular/core';

@Injectable()
export class ItemsListService {

  constructor() { }

  getItemsList(): string[] {
    
    return ["Item 1", "Item 2", "Item 3"]

  }

}
