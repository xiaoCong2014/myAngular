import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakeHeadAnimationComponent } from './shake-head-animation.component';

describe('ShakeHeadAnimationComponent', () => {
  let component: ShakeHeadAnimationComponent;
  let fixture: ComponentFixture<ShakeHeadAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakeHeadAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakeHeadAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
