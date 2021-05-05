import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProteinClassificationComponent } from './edit-protein-classification.component';

describe('EditProteinClassificationComponent', () => {
  let component: EditProteinClassificationComponent;
  let fixture: ComponentFixture<EditProteinClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProteinClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProteinClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
