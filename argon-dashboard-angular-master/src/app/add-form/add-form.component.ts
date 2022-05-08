//import { Component, OnInit } from '@angular/core';
import { Eventt } from 'src/app/Event';
import { EventService } from 'src/app/event-service';
//import { EventEmitter, Input,  Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class addformcomponent implements OnInit {
  Eventt : Eventt = new Eventt();
  selected : string = '';
  selectedtype : string = '';
  EventService : EventService ;
  constructor(private service: EventService) { }
  ngOnInit(): void {
  }
  create(){
    console.log(this.Eventt);
    this.service.addEvent(this.Eventt).subscribe(data=>EventService);
  }
  /*create(){ 
    console.log("heloooooooooooooooooooo");
   // this.submit.emit(this.Eventt);
    this.EventService.addEvent(this.Eventt).subscribe();
    this.modal.close('Save click');


  }*/

}