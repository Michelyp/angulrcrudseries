import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapersonajeComponent } from './listapersonaje.component';

describe('ListapersonajeComponent', () => {
  let component: ListapersonajeComponent;
  let fixture: ComponentFixture<ListapersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListapersonajeComponent]
    });
    fixture = TestBed.createComponent(ListapersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
