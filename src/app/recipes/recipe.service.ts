import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Pizza', 
            'Neapolitana', 
            "https://media.fshoq.com/images/316/pizza-with-vegetables-on-a-wooden-table-316-medium.jpg",
            [
                new Ingredient ('Flour', 1),
                new Ingredient ('Tomatoes', 10)
            ]),
        new Recipe(
            'Pesto Penne',
             'Delicious Pasta',
              "https://p1.pxfuel.com/preview/328/443/588/pesto-pasta-spaghetti-parmesan.jpg",
              [
                new Ingredient ('Penne', 1),
                new Ingredient ('Pesto', 1)
              ])
    
      ];

    constructor(private shoppingListService: ShoppingListService){};

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients)
    }
}