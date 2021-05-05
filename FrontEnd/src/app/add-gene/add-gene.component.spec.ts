import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeneComponent } from './add-gene.component';

describe('AddGeneComponent', () => {
  let component: AddGeneComponent;
  let fixture: ComponentFixture<AddGeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
