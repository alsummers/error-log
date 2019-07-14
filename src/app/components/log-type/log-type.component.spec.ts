import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTypeComponent } from './log-type.component';

describe('LogTypeComponent', () => {
  let component: LogTypeComponent;
  let fixture: ComponentFixture<LogTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
