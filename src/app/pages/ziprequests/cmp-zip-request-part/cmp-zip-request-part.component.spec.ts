import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpZipRequestPartComponent } from './cmp-zip-request-part.component';

describe('CmpZipRequestPartComponent', () => {
  let component: CmpZipRequestPartComponent;
  let fixture: ComponentFixture<CmpZipRequestPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpZipRequestPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpZipRequestPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
