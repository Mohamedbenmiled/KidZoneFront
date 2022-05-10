import { Component, OnInit } from '@angular/core';
import { Categoriepost } from '../Models/categoriepost';
import { CategoriepostService } from '../categoriepost-service/categoriepost.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-categoriepost-list',
  templateUrl: './categoriepost-list.component.html',
  styleUrls: ['./categoriepost-list.component.css']
})
export class CategoriepostListComponent implements OnInit {

  categorieposts !: Categoriepost [];

  constructor(private categoriepostService : CategoriepostService , private router : Router) { }

  ngOnInit(): void {
    this.getCategoryPost();
  }

  private getCategoryPost(){
    this.categoriepostService.getCategoryPost().subscribe(data => {
      this.categorieposts = data ; 
    })
  }
  CategoriepostsUpdate(idCategoriePost : number ){
    this.router.navigate(['CategoriepostsUpdate' , idCategoriePost]);
  }
  Deletecateg(idCategoriePost : number ) {
      this.categoriepostService.Deletecateg(idCategoriePost).subscribe(data => {
      console.log(data);
      this.getCategoryPost() ; 
    })
  }
  pdf(idCategoriePost : number){
    this.categoriepostService.Pdf(idCategoriePost).subscribe(data => this.categoriepostService) ; 
  }  
  
 
}
