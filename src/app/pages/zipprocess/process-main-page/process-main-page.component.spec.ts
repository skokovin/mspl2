import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessMainPageComponent } from './process-main-page.component';

describe('ProcessMainPageComponent', () => {
  let component: ProcessMainPageComponent;
  let fixture: ComponentFixture<ProcessMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
