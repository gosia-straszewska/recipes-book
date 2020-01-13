import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', "https://media.fshoq.com/images/316/pizza-with-vegetables-on-a-wooden-table-316-medium.jpg"),
    new Recipe('Another test recipe', 'this is a test', "https://media.fshoq.com/images/316/pizza-with-vegetables-on-a-wooden-table-316-medium.jpg")

  ]; //WYKORZYSTANIE MODELU

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
