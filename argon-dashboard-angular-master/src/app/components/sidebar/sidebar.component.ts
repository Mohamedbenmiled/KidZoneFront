import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/class', title: 'classe',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/enfants', title: 'enfants',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/event', title: 'event',  icon:'ni-circle-08 text-pink', class: '' } ,
    {path : '/Categorieposts' , title : 'Categoriepost' , icon:'ni-circle-08 text-pink', class: ''} ,
    {path : '/CategoriepostsAdd' ,  title : 'CategorieAdd', icon:'ni-circle-08 text-pink', class: ''} ,
    {path : '/Publicationposts' , title : 'Publication' , icon:'ni-circle-08 text-pink', class: ''} ,
    {path : '/PublicationAdd' , title : 'PublicationAdd' , icon:'ni-circle-08 text-pink', class: ''} ,
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
