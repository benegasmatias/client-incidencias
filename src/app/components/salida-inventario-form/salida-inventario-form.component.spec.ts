import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaInventarioFormComponent } from './salida-inventario-form.component';

describe('SalidaInventarioFormComponent', () => {
  let component: SalidaInventarioFormComponent;
  let fixture: ComponentFixture<SalidaInventarioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaInventarioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaInventarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
