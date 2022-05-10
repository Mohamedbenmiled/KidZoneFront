import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Classe } from 'src/app/classe';
import { ClassService } from 'src/app/services/class.service';
import { UpdateClassComponent } from '../update-class/update-class.component';


@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.css']
})
export class ClassManagementComponent implements OnInit {
classList:any[]=[]
closeResult! : string;
SearchVal:string='';

  constructor(
    public dialog: MatDialog,
    private classService:ClassService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getClasses()
  }
getClasses()
{
  // let idUser = this.userService.getCurrentuser().getId();
  // let idUser =1;
  this.classService.getAllClasses().subscribe((data:any)=>{
    console.log("data",data)
    this.classList=data
  })
 

}
  // addClassDialog(){
  //   console.log("test")
    
  //   const dialogRef = this.dialog.open(UpdateClassComponent, {
  //     width: '400px',
  //     data: {test:"hello"},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
      
  //   });
  // }


  open(content) {
    this.modalService.open(content, {scrollable: true,backdrop:false});
  }
 


  update(classe:any){
    console.log(classe);
   this.classService.modifyClasse(classe).subscribe();
 
 }
    



   editClass(classe:any){
    const dialogRef = this.dialog.open(UpdateClassComponent, {
     width: '400px',
     data: {class:classe},
   });

    dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
      
   });
   }

  deleteClass(id_classe){
    this.classService.removeClasse(id_classe).subscribe((data:any)=>{
      this.getClasses()
    })
  }
  
  create(event){
    console.log(event)
    this.classService.addClasse(event).subscribe(data =>{
      this.getClasses();
      alert("Class successfully added");
    });
    this.modalService.dismissAll();

  }

  create1(Classe){
    console.log(Classe)
    this.classService.modifyClasse(Classe).subscribe(data =>{
      this.getClasses();
      alert("Class successfully updated");
    });
    this.modalService.dismissAll();

  }

  getClasseByL(){
    this.classService.getClasseByLabel().subscribe(
      (data:Classe[])=> this.classList = data
    );
  }
  getClasseDesc(){
    this.classService.getClasseByDesc().subscribe(
      (data:Classe[])=> this.classList = data
    );
  }

  Search() {
    if (this.SearchVal === '') {
      this.getClasses()
      ;
    } else {
      this.classService.SearchClasseByLabel(this.SearchVal).subscribe((res) => {
        this.classList = res;
      });
    }
  }


}
