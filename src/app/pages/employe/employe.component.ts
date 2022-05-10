import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { employee } from 'src/app/api/employe';
import { EmployeService } from 'src/app/employe.service';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  filterTerm!: string;
employe: any ;
listEmployes : any;
form : any;
closeResult! : string;
p:number = 1 ;
  constructor(private employeService: EmployeService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployes();
 
  this.employe = {
    id_Employee: null,
    email : null,
    nom : null,
    prenom : null,
    tel : null,
  }
}
  getAllEmployes(){
    this.employeService.getAllEmployes().subscribe(res => this.listEmployes = res)
  }
  addEmploye(emp : any){
    console.log(emp)
    this.employeService.addEmploye(emp).subscribe(() => {
      this.getAllEmployes();
      this.form = false;
    });
  }
editEmploye(employe: employee) {
  this.employeService.editEmploye(employe).subscribe();
}
deleteEmploye(id_Employee:any) {
  this.employeService.deleteEmploye(id_Employee).subscribe(()=> this.getAllEmployes());
}
open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }

  key : string = 'id_employee';
  reverse : boolean= false ;
  sort(key){
    this.key = key ;
    this.reverse =!this.reverse ;
  }
}
