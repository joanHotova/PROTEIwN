import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProteinClassificationComponent } from './add-protein-classification.component';

describe('AddProteinClassificationComponent', () => {
  let component: AddProteinClassificationComponent;
  let fixture: ComponentFixture<AddProteinClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProteinClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProteinClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
