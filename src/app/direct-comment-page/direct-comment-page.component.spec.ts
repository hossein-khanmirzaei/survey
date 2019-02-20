import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectCommentPageComponent } from './direct-comment-page.component';

describe('DirrectCommentPageComponent', () => {
  let component: DirectCommentPageComponent;
  let fixture: ComponentFixture<DirectCommentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectCommentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectCommentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
