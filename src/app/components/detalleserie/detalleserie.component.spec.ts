import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleserieComponent } from './detalleserie.component';

describe('DetalleserieComponent', () => {
  let component: DetalleserieComponent;
  let fixture: ComponentFixture<DetalleserieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleserieComponent]
    });
    fixture = TestBed.createComponent(DetalleserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
