import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalonComponent } from './calon.component';

describe('CalonComponent', () => {
  let component: CalonComponent;
  let fixture: ComponentFixture<CalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
