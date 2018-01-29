import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuangComponent } from './ruang.component';

describe('RuangComponent', () => {
  let component: RuangComponent;
  let fixture: ComponentFixture<RuangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
