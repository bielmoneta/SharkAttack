import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtaquePage } from './ataque.page';

describe('AtaquePage', () => {
  let component: AtaquePage;
  let fixture: ComponentFixture<AtaquePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtaquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
