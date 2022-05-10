import { Component, OnInit } from '@angular/core';
import { Publication } from '../Models/publication';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PublicationService } from '../publicationservic/publication.service';
@Component({
  selector: 'app-categoriepost-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  Publications !: Publication [];

  constructor(private PublicationService : PublicationService , private router : Router) { }

  ngOnInit(): void {
    this.getPost();
  }

  private getPost(){
    this.PublicationService.getPost().subscribe(data => {
      this.Publications = data ; 
    })
  }
  CategoriepostsUpdate(idCategoriePost : number ){
    this.router.navigate(['CategoriepostsUpdate' , idCategoriePost]);
  }
  DeletePost(idPost : number ) {
      this.PublicationService.DeletePost(idPost).subscribe(data => {
      console.log(data);
      this.getPost() ; 
    })
  }
 
  
 
}
