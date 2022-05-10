import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriepostListComponent } from './categoriepost-list.component';

describe('CategoriepostListComponent', () => {
  let component: CategoriepostListComponent;
  let fixture: ComponentFixture<CategoriepostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriepostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriepostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
