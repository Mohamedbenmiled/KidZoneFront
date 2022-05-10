import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriepostAddComponent } from './categoriepost-add.component';

describe('CategoriepostAddComponent', () => {
  let component: CategoriepostAddComponent;
  let fixture: ComponentFixture<CategoriepostAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriepostAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriepostAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
