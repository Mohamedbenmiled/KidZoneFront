import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-service';
import { Eventt } from '../event';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  listEvent: any;
  form: boolean = false; 
  event!: Eventt;
  closeliesultl: string;
  SearchVal:string='';
  constructor(private eventService: EventService, private modalService: NgbModal) { }

  ngOnInit(): void {
   //this.eventService.getEvents();
   this.eventService.getEvents().subscribe(res =>
    {this.listEvent =res;
      console.log("hello")
    console.log(res);
    })


    this.event = {

      idEvent: null,
      nom: null,
      dateEvent: null,
      nbrInscri: null,
      CategorieEvent: null,
      catt:null
    }
  }
  getEvents(){
   this.eventService.getEvents().subscribe(res =>
      {this.listEvent =res;
        console.log("hello")
      console.log(res);
      })
  }
  addEvent(e:any){
    return this.eventService.addEvent(e).subscribe(() =>{
      this.getEvents();
      this.form = false;
    });
  }
  modifyEvent(e:Event){
     this.eventService.modifyEvent(e).subscribe();
  }
  deleteEvent(idEvent:any){
    this.eventService.deleteEvent(idEvent).subscribe(()=>
    this.getEvents()
    );
  }
  Search() {
    if (this.SearchVal === '') {
      this.getEvents();
    } else {
      this.eventService.finfEventByName(this.SearchVal).subscribe((res) => {
        this.listEvent = res;
      });
    }
  }
  triEvent(){
    this.eventService.triEvent().subscribe(
      (data:Eventt[])=> this.listEvent = data
    );
  }

 /* create(event){
    console.log(event)
    this.eventService.addEvent(event).subscribe(data =>{
      this.getEvents();
      alert("Class successfully added");
    });
    this.modalService.dismissAll();

  }
  open(content) {
    this.modalService.open(content, {scrollable: true,backdrop:false});
  }*/
  /*public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('Liste des evenements.pdf');
    });
}*/
}
