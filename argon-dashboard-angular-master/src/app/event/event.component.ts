import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-service';
import { Eventt } from '../event';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  chartlist:number[]=[];
  textList:String[]=[];
  charTest:boolean=false;
  listEvent: any;
  firstvar:any;
  eventt:Eventt;
  firstval:number;
  triEventlist: Eventt[]=[];
  form: boolean = false; 
  event!: Eventt;
  closeliesultl: string;
  SearchVal:string='';
  constructor(private eventService: EventService, private modalService: NgbModal) { }

  ngOnInit(): void {
    
    //this.eventService.getEvents();
   this.eventService.getEvents().subscribe((res:Eventt[]) =>
    {this.listEvent=res;
      this.listEvent.map((eventt:any)=>{
        this.chartlist.push(eventt.nbrInscri);
      this.textList.push(eventt.nom);
      })
      console.log("hello")
    console.log(res);
     

      const myChart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: this.textList,
            datasets: [{
                label: '# of Events',
                data: this.chartlist,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    })
    this.event = {

      idEvent: null,
      nom: null,
      dateEvent: null,
      nbrInscri: null,
      CategorieEvent: null,
      catt:null
    }

    //chartjs
    //  console.log("test"+this.listEvent);
    //  this.eventService.getEvents().subscribe(res =>
    //   {this.listEvent =res;
    //    console.log("var" +typeof(this.firstvar));
    //    //this.firstval=parseInt(this.firstvar);
    
       
      //  console.log("first val : "+this.firstval);
      //  this.chartlist.push(1);
      //  this.chartlist.push(3);
      //  this.chartlist.push(4);
      //  this.chartlist.push(5);
      //  this.chartlist.push(1);
    
      // })
      
     

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
      (data:Eventt[])=> {this.listEvent = data;
      }
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
