import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronikComponent } from './chronik.component';

describe('ChronikComponent', () => {
  let component: ChronikComponent;
  let fixture: ComponentFixture<ChronikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChronikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
