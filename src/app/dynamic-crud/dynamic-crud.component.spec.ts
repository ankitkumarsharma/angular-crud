import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCrudComponent } from './dynamic-crud.component';

describe('DynamicCrudComponent', () => {
  let component: DynamicCrudComponent;
  let fixture: ComponentFixture<DynamicCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
