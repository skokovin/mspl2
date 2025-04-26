import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpZipTargetComponent } from './cmp-zip-target.component';

describe('CmpZipTargetComponent', () => {
  let component: CmpZipTargetComponent;
  let fixture: ComponentFixture<CmpZipTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpZipTargetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpZipTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
