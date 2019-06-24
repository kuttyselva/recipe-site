import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredients[]=[
  new Ingredients('apples',10),
  new Ingredients('tomato',20),

];
constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredients:Ingredients){
    this.ingredients.push(ingredients);
    console.log(ingredients);
  }

}
