import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoriesFormComponent } from './inventories-form.component';

describe('InventoriesFormComponent', () => {
  let component: InventoriesFormComponent;
  let fixture: ComponentFixture<InventoriesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoriesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
