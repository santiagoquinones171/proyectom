import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDetail } from './bike-detail';

describe('BikeDetail', () => {
  let component: BikeDetail;
  let fixture: ComponentFixture<BikeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
