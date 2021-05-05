import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSequenceComponent } from './add-sequence.component';

describe('AddSequenceComponent', () => {
  let component: AddSequenceComponent;
  let fixture: ComponentFixture<AddSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
