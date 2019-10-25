import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntregaTonersComponent } from './list-entrega-toners.component';

describe('ListEntregaTonersComponent', () => {
  let component: ListEntregaTonersComponent;
  let fixture: ComponentFixture<ListEntregaTonersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntregaTonersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntregaTonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
