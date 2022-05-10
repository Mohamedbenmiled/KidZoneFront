import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassecomponentComponent } from './classecomponent.component';

describe('ClassecomponentComponent', () => {
  let component: ClassecomponentComponent;
  let fixture: ComponentFixture<ClassecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
