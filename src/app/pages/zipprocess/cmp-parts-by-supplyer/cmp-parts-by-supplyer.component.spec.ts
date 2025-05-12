import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPartsBySupplyerComponent } from './cmp-parts-by-supplyer.component';

describe('CmpPartsBySupplyerComponent', () => {
  let component: CmpPartsBySupplyerComponent;
  let fixture: ComponentFixture<CmpPartsBySupplyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpPartsBySupplyerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpPartsBySupplyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
