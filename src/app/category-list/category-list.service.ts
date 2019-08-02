import { Injectable, OnInit } from '@angular/core';
import { CategoryListItemsModel } from './category-list-items-model'

@Injectable()
export class CategoryListService {

  categoryItemsList: Array<CategoryListItemsModel> = [];

  constructor() { }

  getCategoryListItems(): Array<CategoryListItemsModel> {

    this.categoryItemsList =

      [
      {
          category: "Electronics", items: [
          { name: "TV", price: 2000 },
          { name: "Playstation", price: 400 },
          { name: "TV", price: 1600 }
          ], total: 0
      },
      {
        category: "Clothing", items: [
          { name: "Shirts", price: 1100 },
          { name: "Jeans", price: 1100 }
        ], total: 0
      },
      {
        category: "Kitchen", items: [
          { name: "Pots and Pans", price: 3000 },
          { name: "Flatware", price: 500 },
          { name: "Knife Set", price: 500 },
          { name: "Misc", price: 1000 }
        ], total: 0
      }
      ]

    return this.categoryItemsList

  }

  ngOnInit() {
  }

}
