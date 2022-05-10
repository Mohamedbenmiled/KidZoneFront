import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from '../Models/publication';
import { PublicationService } from '../publicationservic/publication.service';
@Component({
  selector: 'app-publication-add',
  templateUrl: './publication-add.component.html',
  styleUrls: ['./publication-add.component.css'],
})
export class PublicationAddComponent implements OnInit {

  publication : Publication  = new Publication() ; 
  selected : string = '' ; 
  selectedtype : string = '';
  constructor(private publicationService : PublicationService , private router : Router) { }

  ngOnInit(): void {
  }
   savePost(){
    this.publicationService.addpost(this.publication).subscribe(data => {
      console.log(data);
    } , 
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.publication); 
    this.savePost();
   }

}
