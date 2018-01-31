import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasilComponent } from './hasil.component';

describe('HasilComponent', () => {
  let component: HasilComponent;
  let fixture: ComponentFixture<HasilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
