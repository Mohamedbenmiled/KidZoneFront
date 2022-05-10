import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ClassManagementComponent } from 'src/app/pages/class-management/class-management.component';
import { EnfantCComponent } from 'src/app/pages/enfant-c/enfant-c.component';
import { EventComponent } from 'src/app/event/event.component';
import { addformcomponent } from 'src/app/add-form/add-form.component';
import { CategoriepostListComponent } from 'src/app/categoriepost-list/categoriepost-list.component';
import { CategoriepostAddComponent } from 'src/app/categoriepost-add/categoriepost-add.component';
import { CategoriepostUpdateComponent } from 'src/app/categoriepost-update/categoriepost-update.component';
import { PublicationListComponent } from 'src/app/publication-list/publication-list.component';
import { PublicationAddComponent } from 'src/app/publication-add/publication-add.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {path:"class", component:ClassManagementComponent},
    {path:"enfants", component:EnfantCComponent},
    { path: 'event',          component: EventComponent },
    { path: 'add-form',          component: addformcomponent },
    { path: 'add-form',          component: addformcomponent },
    {path : 'CategoriepostList' , component : CategoriepostListComponent} ,
  {path : 'CategoriepostsAdd' , component : CategoriepostAddComponent} ,
  {path : 'CategoriepostsUpdate/idCategoriePost:' , component : CategoriepostUpdateComponent} ,
  {path : 'Publicationposts' , component : PublicationListComponent} ,
  {path : 'PublicationAdd' , component : PublicationAddComponent} ,
];
