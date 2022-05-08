import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantCComponent } from './enfant-c.component';

describe('EnfantCComponent', () => {
  let component: EnfantCComponent;
  let fixture: ComponentFixture<EnfantCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
