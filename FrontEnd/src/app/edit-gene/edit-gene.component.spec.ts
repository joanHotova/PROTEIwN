import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneComponent } from './edit-gene.component';

describe('EditGeneComponent', () => {
  let component: EditGeneComponent;
  let fixture: ComponentFixture<EditGeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
