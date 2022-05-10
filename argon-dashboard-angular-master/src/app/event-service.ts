import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Eventt } from "./Event";

@Injectable({
    providedIn: 'root'
})
export class EventService {
    readonly API_URL = 'http://localhost:8068/SpringMVC/event'
    constructor(private httpClient: HttpClient){}
    eventt: Eventt = new Eventt();
    getEvents(){
        return this.httpClient.get(`${this.API_URL}/all-events`);
        
    }
    addEvent(Eventt1: any){
        return this.httpClient.post<Eventt>(`${this.API_URL}/add-event`, Eventt1)
    }
    modifyEvent(Eventt1: any){
        return this.httpClient.put(`${this.API_URL}/modify-event`, Eventt1)
    }
    deleteEvent(idEvent: Number){
        return this.httpClient.delete(`${this.API_URL}/remove-event/${idEvent}`)
    }
    retrieveEvent(idEvent: Number){
        return this.httpClient.get(`${this.API_URL}/retrieve-event/${idEvent}`)
    }
    finfEventByName(name: string): Observable<Eventt[]> {
        return this.httpClient.get<Eventt[]>(`${this.API_URL}/find-eventByNom/${name}`)
    }
    triEvent(){
        return this.httpClient.get<Eventt[]>(`${this.API_URL}/tri-event`);
    }
    triEventt(){
        return this.httpClient.get("http://localhost:8068/SpringMVC/event/tri-event");
    }
    getInscriptions(id:number)
    {
        const insecriptions= this.httpClient.get(`http://localhost:8068/SpringMVC/event/getNbiscri/`+id);
        return insecriptions

    }
}
