import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recpieService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recpieService.getRecipes();
    this.http
      .put(
      'https://recipe-book-b0833.firebaseio.com/recipes.json',
      recipes
      )
      .subscribe( response => {
      console.log(response);
    });
  }

  fetchData() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-book-b0833.firebaseio.com/recipes.json',
      )
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
      tap(recipes => {
        this.recpieService.setRecipes(recipes);
      })
      );
  }
}
