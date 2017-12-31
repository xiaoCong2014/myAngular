import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHighLightComponentComponent } from './my-high-light-component.component';

describe('MyHighLightComponentComponent', () => {
  let component: MyHighLightComponentComponent;
  let fixture: ComponentFixture<MyHighLightComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHighLightComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHighLightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
