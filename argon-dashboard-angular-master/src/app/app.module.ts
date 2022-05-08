import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { addformcomponent } from './add-form/add-form.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ClassecomponentComponent } from './classecomponent/classecomponent.component';
import { ClassManagementComponent } from './pages/class-management/class-management.component';
import { UpdateClassComponent } from './pages/update-class/update-class.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EnfantCComponent } from './pages/enfant-c/enfant-c.component';
import { EventComponent } from './event/event.component';
import { CategorieEventComponent } from './categorie-event/categorie-event.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ClassecomponentComponent,
    ClassManagementComponent,
    UpdateClassComponent,
    EventComponent,
    EnfantCComponent,
    CategorieEventComponent
  ],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
