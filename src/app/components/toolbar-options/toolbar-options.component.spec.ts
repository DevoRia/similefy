import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarOptionsComponent } from './toolbar-options.component';

describe('ToolbarOptionsComponent', () => {
  let component: ToolbarOptionsComponent;
  let fixture: ComponentFixture<ToolbarOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
