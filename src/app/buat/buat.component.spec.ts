import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatComponent } from './buat.component';

describe('BuatComponent', () => {
  let component: BuatComponent;
  let fixture: ComponentFixture<BuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
