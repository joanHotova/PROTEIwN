import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrganismComponent } from './edit-organism.component';

describe('EditOrganismComponent', () => {
  let component: EditOrganismComponent;
  let fixture: ComponentFixture<EditOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
