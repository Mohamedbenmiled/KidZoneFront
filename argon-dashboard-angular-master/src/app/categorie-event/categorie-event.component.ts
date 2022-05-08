import { Component, OnInit } from '@angular/core';
import { CategorieEvent } from '../categorie-event';
import { CategorieEventService } from '../categorie-event-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-categorie-event',
  templateUrl: './categorie-event.component.html',
  styleUrls: ['./categorie-event.component.css']
})
export class CategorieEventComponent implements OnInit {
  listCategoriEvent: any
  form: boolean = false; 
  closeliesultl: string;
  categorieEvent!: CategorieEvent;
  constructor(private categorieEventService: CategorieEventService,private modalService: NgbModal) {
    
   }

  ngOnInit(): void {
    this.categorieEventService.getCategorieEvents().subscribe(res =>
      {this.listCategoriEvent =res;
        console.log("hello")
      console.log(res);
      })
  
  
      this.categorieEvent = {
  
        idCategorie: null,
        label: null
        
      }
    }
    getCategoriEvents(){
      this.categorieEventService.getCategorieEvents().subscribe(res =>
        {this.listCategoriEvent =res;
          console.log("hello")
        console.log(res);
        })
    }
    addCategoriEvent(e:any){
      return this.categorieEventService.addCategorieEvent(e).subscribe(() =>{
        this.getCategoriEvents();
        this.form = false;
      });
    }
    modifyCategoriEvent(e:Event){
       this.categorieEventService.modifyCategorieEvent(e).subscribe();
    }
    deleteCategorEvent(idEvent:any){
      this.categorieEventService.deleteCategorieEvent(idEvent).subscribe(()=>
      this.getCategoriEvents()
      );
  }
 

}
