import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationPageComponent } from './relation-page.component';

describe('RelationPageComponent', () => {
  let component: RelationPageComponent;
  let fixture: ComponentFixture<RelationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
