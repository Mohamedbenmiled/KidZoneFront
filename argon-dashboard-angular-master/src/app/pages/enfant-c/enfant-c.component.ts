import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EnfantService} from 'src/app/services/enfantser.service';
import { Enfants } from 'src/app/enfants';
import { Observable } from 'rxjs';
import { AddEnfantComponent } from '../add-enfant/add-enfant.component';
@Component({
  selector: 'app-enfant-c',
  templateUrl: './enfant-c.component.html',
  styleUrls: ['./enfant-c.component.css']
})
export class EnfantCComponent implements OnInit {
  enfantList:any[]=[]
  closeResult! : string;
  SearchVal:string='';
  constructor( public dialog: MatDialog,
    private enfantserService:EnfantService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getEnfants()
  }
  getEnfants()
{
  // let idUser = this.userService.getCurrentuser().getId();
  // let idUser =1;
  this.enfantserService.getEnfants().subscribe((data:any)=>{
    console.log("data",data)
    this.enfantList=data
  })
 

}
  

  open(content) {
    this.modalService.open(content, {scrollable: true,backdrop:false});
  }

  deleteEnfants(id_enfant){
    this.enfantserService.removeEnfant(id_enfant).subscribe((data:any)=>{
      this.getEnfants()
    })
  }
  
  create(event){
    console.log(event)
    this.enfantserService.addEnfant(event).subscribe(data =>{
      this.getEnfants();
      alert("Enfants successfully added");
    });
    this.modalService.dismissAll();

  }

 

  getEnfantsASC(){
    this.enfantserService.getEnfantsASC().subscribe(
      (data:Enfants[])=> this.enfantList = data
    );
  }
  getEnfantsDesc(){
    this.enfantserService.getEnfantsDesc().subscribe(
      (data:Enfants[])=> this.enfantList = data
    );
  }

  SearchEnfant() {
    if (this.SearchVal === '') {
      this.getEnfants()
      ;
    } else {
      this.enfantserService.SearchEnfantByNom(this.SearchVal).subscribe((res) => {
        this.enfantList = res;
      });
    }
  }

}
