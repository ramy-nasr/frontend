import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourCostComponent } from './labour-cost.component';

describe('LabourCostComponent', () => {
  let component: LabourCostComponent;
  let fixture: ComponentFixture<LabourCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
