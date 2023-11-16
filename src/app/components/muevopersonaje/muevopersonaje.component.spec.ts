import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuevopersonajeComponent } from './muevopersonaje.component';

describe('MuevopersonajeComponent', () => {
  let component: MuevopersonajeComponent;
  let fixture: ComponentFixture<MuevopersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuevopersonajeComponent]
    });
    fixture = TestBed.createComponent(MuevopersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
