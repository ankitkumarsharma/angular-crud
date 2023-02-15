import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToParentComponent } from './back-to-parent.component';

describe('BackToParentComponent', () => {
  let component: BackToParentComponent;
  let fixture: ComponentFixture<BackToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
