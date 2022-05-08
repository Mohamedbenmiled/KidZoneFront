import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieEventComponent } from './categorie-event.component';

describe('CategorieEventComponent', () => {
  let component: CategorieEventComponent;
  let fixture: ComponentFixture<CategorieEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
