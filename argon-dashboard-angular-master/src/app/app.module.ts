import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEnfantComponent } from './pages/add-enfant/add-enfant.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ClassecomponentComponent } from './classecomponent/classecomponent.component';
import { ClassManagementComponent } from './pages/class-management/class-management.component';
import { UpdateClassComponent } from './pages/update-class/update-class.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EnfantCComponent } from './pages/enfant-c/enfant-c.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ClassecomponentComponent,
    ClassManagementComponent,
    UpdateClassComponent,
    EnfantCComponent,AddEnfantComponent
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
