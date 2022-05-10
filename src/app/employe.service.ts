import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})


export class EmployeService {
    readonly API_URL = 'http://localhost:8090/SpringMVC/EmployeController';
    constructor(private httpClient:HttpClient) {}

getAllEmployes(){
    return this.httpClient.get(`${this.API_URL}/all-Employes`)
}
addEmploye(employe:any) {
    return this.httpClient.post(`${this.API_URL}/add-Employe`, employe)
}  
editEmploye(employe: any) {
    return this.httpClient.put(`${this.API_URL}/edit-Employe`, employe)
} 
deleteEmploye(id_Employee:any) {
    return this.httpClient.delete(`${this.API_URL}/delete-Employe/${id_Employee}`)
}
}
