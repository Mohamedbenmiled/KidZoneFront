import { Component, OnInit } from '@angular/core';
import { Categoriepost } from '../Models/categoriepost';
import { NgModel } from '@angular/forms';
import { CategoriepostService } from '../categoriepost-service/categoriepost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoriepost-add',
  templateUrl: './categoriepost-add.component.html',
  styleUrls: ['./categoriepost-add.component.css']
})
export class CategoriepostAddComponent implements OnInit {

  categoriepost : Categoriepost = new Categoriepost() ;
  constructor(private categoriepostService : CategoriepostService , private router : Router) { }

  ngOnInit(): void {
  }
  saveCategorie(){
    this.categoriepostService.addCategoriepost(this.categoriepost).subscribe(data => {
      console.log(data);
    } , 
    error => console.log(error));
  }

  goToCategoriePost(){
   this.router.navigate(['/Categorieposts']);
  }

  onSubmit(){
   console.log(this.categoriepost); 
   this.saveCategorie();
  }

}
