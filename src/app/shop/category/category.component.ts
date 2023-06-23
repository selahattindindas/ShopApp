import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepostory } from 'src/app/model/category.repostory';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private categoryRepostory:CategoryRepostory){}
  ngOnInit(): void {
  }
  get category():Category[]{
    return this.categoryRepostory.getCategories();
}
}
