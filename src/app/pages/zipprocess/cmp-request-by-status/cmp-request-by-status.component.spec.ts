import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpRequestByStatusComponent } from './cmp-request-by-status.component';

describe('CmpRequestByStatusComponent', () => {
  let component: CmpRequestByStatusComponent;
  let fixture: ComponentFixture<CmpRequestByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpRequestByStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpRequestByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
