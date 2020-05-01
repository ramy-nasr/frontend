import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourCostListComponent } from './labour-cost-list.component';

describe('LabourCostListComponent', () => {
  let component: LabourCostListComponent;
  let fixture: ComponentFixture<LabourCostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourCostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourCostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
