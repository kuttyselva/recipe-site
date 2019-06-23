import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[] =[
  new Recipe('Test recipe','desc pa','https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg'),
  new Recipe('Test recipe','desc pa','https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
