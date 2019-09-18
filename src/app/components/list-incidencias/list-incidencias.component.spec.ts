import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncidenciasComponent } from './list-incidencias.component';

describe('ListIncidenciasComponent', () => {
  let component: ListIncidenciasComponent;
  let fixture: ComponentFixture<ListIncidenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIncidenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
