import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTonersComponent } from './list-toners.component';

describe('ListTonersComponent', () => {
  let component: ListTonersComponent;
  let fixture: ComponentFixture<ListTonersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTonersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
