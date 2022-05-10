import { Component, OnInit } from '@angular/core';
import { Classe } from '../classe';

@Component({
  selector: 'app-classecomponent',
  templateUrl: './classecomponent.component.html',
  styleUrls: ['./classecomponent.component.css']
})
export class ClassecomponentComponent implements OnInit {
listclasses: any;
form: boolean =false;
classe!: Classe;
closeResult!: string;

  constructor( ) { }

  ngOnInit(): void {
   /* this.getAllClasses();
    this.classe = {
      id_classe:null,
      label:null
    }*/
  

}
}