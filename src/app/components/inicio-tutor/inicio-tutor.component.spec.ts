import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTutorComponent } from './inicio-tutor.component';

describe('InicioTutorComponent', () => {
  let component: InicioTutorComponent;
  let fixture: ComponentFixture<InicioTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
