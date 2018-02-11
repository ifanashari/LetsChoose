import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasilruangComponent } from './hasilruang.component';

describe('HasilruangComponent', () => {
  let component: HasilruangComponent;
  let fixture: ComponentFixture<HasilruangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasilruangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasilruangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
