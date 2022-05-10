import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnfantService } from 'src/app/enfant-service';
import { Enfants } from 'src/app/enfants';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-enfant',
  templateUrl: './add-enfant.component.html',
  styleUrls: ['./add-enfant.component.css']
})
export class AddEnfantComponent implements OnInit {


  @Input() modal: any;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  enfant :Enfants = new Enfants
  constructor(private service : EnfantService) { }

  ngOnInit(): void {
   // this.enfant.age=null;
   // this.enfant.nom="";
   // this.enfant.prenom="";
  }
  create(){ 
    console.log("heloooooooooooooooooooo");
    this.submit.emit(this.enfant);
    this.modal.close('Save click');


  }

}
