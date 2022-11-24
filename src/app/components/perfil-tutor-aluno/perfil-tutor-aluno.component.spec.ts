import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTutorAlunoComponent } from './perfil-tutor-aluno.component';

describe('PerfilTutorAlunoComponent', () => {
  let component: PerfilTutorAlunoComponent;
  let fixture: ComponentFixture<PerfilTutorAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilTutorAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilTutorAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
