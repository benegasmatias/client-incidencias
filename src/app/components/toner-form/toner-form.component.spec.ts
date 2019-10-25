import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerFormComponent } from './toner-form.component';

describe('TonerFormComponent', () => {
  let component: TonerFormComponent;
  let fixture: ComponentFixture<TonerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
