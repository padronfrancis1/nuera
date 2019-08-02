import { Component, OnInit } from '@angular/core';
import { CategoryListService } from './category-list.service'
import { CategoryListItemsModel } from './category-list-items-model'


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryListService]
})
export class CategoryListComponent implements OnInit {

  categoryItemsList: Array<CategoryListItemsModel> = [];
  categoryItemsListOptions: Array<CategoryListItemsModel> = [];
  txtItemName;
  txtItemPrice;
  selectedCategory;
  totalAll;

  constructor(categoryListService: CategoryListService) {
    this.categoryItemsList = categoryListService.getCategoryListItems();
    this.categoryItemsListOptions = categoryListService.getCategoryListItems();
  }

  addIttems() {
    if (this.txtItemName === undefined ||
      this.txtItemName === "" ||
      this.txtItemPrice === undefined ||
      this.selectedCategory === undefined ||
      this.selectedCategory === "" ||
      this.txtItemPrice === "") {
      // do nothing
      console.log("empty inputs");
    } else {
      this.categoryItemsList[this.selectedCategory].items.push({ name: this.txtItemName, price: +this.txtItemPrice });
      this.total();
    }
  }

  selectChange() {
  }

  total() {
    const total = this.categoryItemsList[this.selectedCategory].items.reduce((sum, items) => sum + items.price, 0);
    this.categoryItemsList[this.selectedCategory].total = total;

    let total_items_price = 0;
    this.categoryItemsList.forEach(category => {
      total_items_price = total_items_price + category.total;
      this.totalAll = total_items_price;
    });
  }

  categoryTotal() {
    this.categoryItemsList.forEach(category => {
      const category_total = category.items.reduce((sum, items) => sum + items.price, 0);
      category.total = category_total;
    });    
  }

  removeItem(outer, inner) {

    if (this.selectedCategory === undefined || this.selectedCategory === "") {
      alert("Please select a category");
      console.log("Please select a category");
    } else {

      if (outer == this.selectedCategory) {
        this.categoryItemsList[outer].items.splice(inner, 1);
        this.total();
      } else {
        // do nothing
      }
    }
  }

  ngOnInit() {
    this.categoryTotal();
  }

}
