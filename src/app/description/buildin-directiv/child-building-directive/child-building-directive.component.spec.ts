import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBuildingDirectiveComponent } from './child-building-directive.component';

describe('ChildBuildingDirectiveComponent', () => {
  let component: ChildBuildingDirectiveComponent;
  let fixture: ComponentFixture<ChildBuildingDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBuildingDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBuildingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
