import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityPageComponent } from './identity-page.component';

describe('IdentityPageComponent', () => {
  let component: IdentityPageComponent;
  let fixture: ComponentFixture<IdentityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
