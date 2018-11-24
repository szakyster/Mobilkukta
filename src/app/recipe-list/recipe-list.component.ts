import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../shared/recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  $recipes: Observable<Recipe[]>;

  constructor( private router: Router, private recipeService: RecipeService) {
   }

  ngOnInit() {
    this.$recipes = this.recipeService.GetRecipeList();
  }

  goView() {
    this.router.navigateByUrl('view/1');
  }

  goEdit(recipe: Recipe) {
    this.router.navigateByUrl('edit/' + recipe.Link);
  }
}
