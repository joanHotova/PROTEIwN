import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProteinComponent } from './add-protein.component';

describe('AddProteinComponent', () => {
  let component: AddProteinComponent;
  let fixture: ComponentFixture<AddProteinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProteinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
