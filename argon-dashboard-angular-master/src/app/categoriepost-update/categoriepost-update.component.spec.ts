import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriepostUpdateComponent } from './categoriepost-update.component';

describe('CategoriepostUpdateComponent', () => {
  let component: CategoriepostUpdateComponent;
  let fixture: ComponentFixture<CategoriepostUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriepostUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriepostUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
