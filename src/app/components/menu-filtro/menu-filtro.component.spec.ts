import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFiltroComponent } from './menu-filtro.component';

describe('MenuFiltroComponent', () => {
  let component: MenuFiltroComponent;
  let fixture: ComponentFixture<MenuFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
