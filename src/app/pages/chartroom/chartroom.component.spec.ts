import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartroomComponent } from './chartroom.component';

describe('ChartroomComponent', () => {
  let component: ChartroomComponent;
  let fixture: ComponentFixture<ChartroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
