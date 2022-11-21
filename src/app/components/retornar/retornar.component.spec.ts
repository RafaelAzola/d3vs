import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornarComponent } from './retornar.component';

describe('RetornarComponent', () => {
  let component: RetornarComponent;
  let fixture: ComponentFixture<RetornarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetornarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetornarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
