import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinClassificationComponent } from './protein-classification.component';

describe('ProteinClassificationComponent', () => {
  let component: ProteinClassificationComponent;
  let fixture: ComponentFixture<ProteinClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
