import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Recipe } from './shared/recipe.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: BehaviorSubject<Recipe[]>;
  constructor() {
    this.recipes = new BehaviorSubject(this.recipeMockData);
  }

  private recipeMockData: Recipe[] = [{
    Name: 'Bableves',
    Description: 'Bavleves a klasszikus recept szerint, nem jókai!',
    Type: 'Leves',
    ImageUrls: ['bableves']
  },
  {
    Name: 'Rántott hús',
    Description: 'Rántott hús sertéskarajból',
    Type: 'Hús feltét',
    ImageUrls: ['bableves']
  },
  {
    Name: 'Fokhagymás tejszínes wok',
    Description: 'A wokos receptgyüjteményből',
    Type: 'Hús feltét',
    ImageUrls: ['bableves']
  }, {
    Name: 'Citrompite',
    Description: 'Rántott hús sertéskarajból',
    Type: 'Hús feltét',
    ImageUrls: ['bableves']
  }];

  public GetRecipeList(): Observable<Recipe[]> {
    return this.recipes;
  }

  public GetTopRecipe(take: number): Observable<Recipe[]> {
    return this.recipes.pipe(map(x => x.slice(0, take)));
  }
}
