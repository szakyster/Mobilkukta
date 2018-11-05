import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  $recipeTop2: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.$recipeTop2 = this.recipeService.GetTopRecipe(2);
  }

}
