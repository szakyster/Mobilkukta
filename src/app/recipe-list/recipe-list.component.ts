import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  goView() {
    this.router.navigateByUrl('view/1');
  }

  goEdit() {
    this.router.navigateByUrl('edit/1');
  }
}
