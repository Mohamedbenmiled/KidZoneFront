import { ComponentFixture, TestBed } from '@angular/core/testing';

import {addformcomponent} from './add-form.component';
import {EventService} from '../event-service';

describe('CreateComponent', () => {
  let component: addformcomponent;
  let fixture: ComponentFixture<addformcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addformcomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addformcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});