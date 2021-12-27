import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERDiagramComponent } from './erdiagram.component';

describe('ERDiagramComponent', () => {
  let component: ERDiagramComponent;
  let fixture: ComponentFixture<ERDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
