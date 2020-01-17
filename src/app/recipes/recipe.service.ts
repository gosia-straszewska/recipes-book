import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Pizza',
            'Neapolitana',
            'https://media.fshoq.com/images/316/pizza-with-vegetables-on-a-wooden-table-316-medium.jpg',
            [
                new Ingredient ('Flour', 1),
                new Ingredient ('Tomatoes', 10)
            ]),
        new Recipe(
            'Pesto Penne',
             'Delicious Pasta',
              'https://p1.pxfuel.com/preview/328/443/588/pesto-pasta-spaghetti-parmesan.jpg',
              [
                new Ingredient ('Penne', 1),
                new Ingredient ('Pesto', 1)
              ])

      ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}
