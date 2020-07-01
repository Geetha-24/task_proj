import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatafromurlComponent } from './datafromurl.component';

describe('DatafromurlComponent', () => {
  let component: DatafromurlComponent;
  let fixture: ComponentFixture<DatafromurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatafromurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatafromurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
