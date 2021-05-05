import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganismComponent } from './add-organism.component';

describe('AddOrganismComponent', () => {
  let component: AddOrganismComponent;
  let fixture: ComponentFixture<AddOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
