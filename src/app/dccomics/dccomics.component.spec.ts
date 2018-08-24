import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCcomicsComponent } from './dccomics.component';

describe('DCcomicsComponent', () => {
  let component: DCcomicsComponent;
  let fixture: ComponentFixture<DCcomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCcomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCcomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
