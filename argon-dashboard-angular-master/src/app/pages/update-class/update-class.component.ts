import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';
import { Classe } from 'src/app/classe';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {

  @Input() modal: any;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  classe : Classe = new Classe();
 
  constructor(private service : ClassService) { }
  ngOnInit(): void {
this.classe.label="";
  }


  create(){ 
    console.log("heloooooooooooooooooooo");
    this.submit.emit(this.classe);
    this.modal.close('Save click');


  }
 
//  update(){
//    console.log(this.classe);
//    this.ClassService.modifyClasse(this.classe).subscribe();

//  }
}
