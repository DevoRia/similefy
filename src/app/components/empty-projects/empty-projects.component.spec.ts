import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyProjectsComponent } from './empty-projects.component';

describe('EmptyProjectsComponent', () => {
  let component: EmptyProjectsComponent;
  let fixture: ComponentFixture<EmptyProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
