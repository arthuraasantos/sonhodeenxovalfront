import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnxovalComponent } from './enxoval.component';

describe('EnxovalComponent', () => {
  let component: EnxovalComponent;
  let fixture: ComponentFixture<EnxovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnxovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnxovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
