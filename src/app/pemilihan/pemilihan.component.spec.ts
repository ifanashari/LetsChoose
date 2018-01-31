import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PemilihanComponent } from './pemilihan.component';

describe('PemilihanComponent', () => {
  let component: PemilihanComponent;
  let fixture: ComponentFixture<PemilihanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemilihanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemilihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
