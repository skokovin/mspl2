import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipRequestBuilderComponent } from './zip-request-builder.component';

describe('ZipRequestBuilderComponent', () => {
  let component: ZipRequestBuilderComponent;
  let fixture: ComponentFixture<ZipRequestBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZipRequestBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipRequestBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
