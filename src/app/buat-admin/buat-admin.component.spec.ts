import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatAdminComponent } from './buat-admin.component';

describe('BuatAdminComponent', () => {
  let component: BuatAdminComponent;
  let fixture: ComponentFixture<BuatAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuatAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
