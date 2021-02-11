import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareAreaComponent } from './compare-area.component';

describe('CompareAreaComponent', () => {
  let component: CompareAreaComponent;
  let fixture: ComponentFixture<CompareAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
