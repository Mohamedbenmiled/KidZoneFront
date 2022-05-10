import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Enfants } from '../enfants';

@Injectable({
    providedIn: 'root'
})
export class EnfantService {
    readonly API_URL = 'http://localhost:8068';
    constructor(private httpClient: HttpClient) {}

    getEnfants()
    {
        return this.httpClient.get(`${this.API_URL}/all-enfants`)
    }

    addEnfant(enfants:any)
    {
        return this.httpClient.post(`${this.API_URL}/add-enfant`,enfants)
    }

    modifyEnfant(enfants:any)
    {
        return this.httpClient.put(`${this.API_URL}/update-enfants`,enfants)
    }

    removeEnfant(idenfants:any)
    {
        return this.httpClient.delete(`${this.API_URL}/remove-enfants/${idenfants}`)
    }

}
