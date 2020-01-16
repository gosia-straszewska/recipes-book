import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [];

  // recipes: Recipe[] = [
  //   new Recipe('A test recipe', 'this is a test', "https://media.fshoq.com/images/316/pizza-with-vegetables-on-a-wooden-table-316-medium.jpg"),
  //   new Recipe('Another test recipe', 'this is a test', "https://media.fshoq.com/images/316/pizza-with-vegetables-on-a-wooden-table-316-medium.jpg")

  // ]; //WYKORZYSTANIE MODELU

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
