import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatafromurlserviceComponent } from './datafromurlservice.component';

describe('DatafromurlserviceComponent', () => {
  let component: DatafromurlserviceComponent;
  let fixture: ComponentFixture<DatafromurlserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatafromurlserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatafromurlserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
