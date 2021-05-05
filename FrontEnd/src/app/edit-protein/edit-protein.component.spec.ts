import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProteinComponent } from './edit-protein.component';

describe('EditProteinComponent', () => {
  let component: EditProteinComponent;
  let fixture: ComponentFixture<EditProteinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProteinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
