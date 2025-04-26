import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpZipSerialsComponent } from './cmp-zip-serials.component';

describe('CmpZipSerialsComponent', () => {
  let component: CmpZipSerialsComponent;
  let fixture: ComponentFixture<CmpZipSerialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpZipSerialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpZipSerialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
